import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useSelector, useDispatch } from "react-redux";
import { setReplay } from "../../redux/typingSpeedSlice";
import { RootState } from '../../redux/store';


function Clock() {
    const time = useSelector((state: RootState) => state.typingSpeed.time);
    const start = useSelector((state: RootState) => state.typingSpeed.start);
    const wrongWord = useSelector((state: RootState) => state.typingSpeed.wrongWord);
    const correctWord = useSelector((state: RootState) => state.typingSpeed.correctWord);
    const correctEntries = useSelector((state: RootState) => state.typingSpeed.correctEntries);
    const unCorrectEntries = useSelector((state: RootState) => state.typingSpeed.unCorrectEntries);
    const totalEntries = correctEntries + unCorrectEntries;
    const accurancy = Math.round((correctEntries / totalEntries) * 100).toFixed(1);
    const uncorrectWords = useSelector((state: RootState) => state.typingSpeed.uncorrectWords.slice(1));
    const correctEntriesOfCorrectWords = useSelector((state: RootState) => state.typingSpeed.correctEntriesOfCorrectWords);

    const Swal = require("sweetalert2");

    const dispatch = useDispatch();

    const renderTime = ({ remainingTime }: { remainingTime: number }) => {
        if (remainingTime === 0) {

            // console.log({
            //     correctEntriesOfCorrectWords,
            //     correctEntries,
            //     unCorrectEntries,
            //     totalEntries,
            //     accurancy,
            //     uncorrectWords
            // })

            const wrongWords: string[] = uncorrectWords.map(x => {
                return (
                    '<b>' + x.wordToDigit + '</b> you typed <b>' + x.wrongWord + '</b></br>'
                )
            })

            Swal.fire({
                title: `Words: ✅ ${correctWord} 🚫 ${wrongWord}`,
                html:
                    'Corrected CPM: <b>' + correctEntriesOfCorrectWords + '</b> (that is ' + Math.round(correctEntriesOfCorrectWords / 5) + ' WPM)</br></br>' +
                    'In reality, you typed ' + (correctEntries + unCorrectEntries) + ' CPM, but you made ' + unCorrectEntries + ' mistakes, which were not counted in the corrected scores.</br></br>' +
                    'Correct Entries: <b>' + correctEntries + '</b></br>' +
                    'Incorrect Entries: <b>' + unCorrectEntries + '</b></br>' +
                    'Total Entries: <b>' + totalEntries + '</b></br>' +
                    'Accuracy: <b>' + accurancy + '%</b></br></br>' +
                    'Total Time: <b>' + Math.round(time + 1) + ' sec</b></br></br>' +
                    'Your mistakes were:</br>' + wrongWords.join("") + '</br>'
            }).then((confirmButton: any) => {
                if (confirmButton.value) {
                    dispatch(setReplay());
                }
            });
        } else {
            return (
                <div>
                    {remainingTime} <br />
                    <span className="text-slate-400"> seconds </span>
                </div>
            );
        }
    };

    return (
        <div className="flex items-center justify-center">
            <div style={{
                marginTop: '35px',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '50 %'
            }}>

                <CountdownCircleTimer
                    key={time}
                    isPlaying={start === true ? true : false}
                    duration={time}
                    colors={["#008000", "#F7B801", "#008000", "#F7B801"]}
                    colorsTime={[7, 5, 2, 0]}
                    size={120}
                >
                    {renderTime}
                </CountdownCircleTimer>

            </div>
        </div >
    );
}

export default Clock;