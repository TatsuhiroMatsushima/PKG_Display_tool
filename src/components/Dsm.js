import React from 'react'
// import { Link } from 'react-router-dom';
import Modal from 'react-modal'
import { Dsmresult, Button, Delete } from './index';
Modal.setAppElement('#root')
export default function Dsm() {
    // PKG選択ボタン用配列
    const pkgs = ['VFCHP', 'VT-1', 'EQL', '64kIF', 'OCU-5', 'VT-2', 'VT-3', 'SIG', 'LHSD']

    // PKGとCHの入力管理
    const [inputs, setVals] = React.useState(
        { pkgName: '', number: '', blockNumber: '', ifNumber: '' }
    );
    // モーダル管理
    const [modalIsOpen, setIsOpen] = React.useState(false);
    // inputsのpkgnameにPKG名を反映
    const handleNameChange = i => setVals({ ...inputs, pkgName: i });
    // inputsのchnumberにch数を反映
    const handleInputNumberChange = i => {
        setVals({ ...inputs, number: Number(inputs.number + i) });
    }
    // chnumber初期化
    const numberInit = () => {
        setVals({ ...inputs, number: "" });
    }

    // 検索ボタン
    const calculationHilight = () => {
        // console.log(inputs.chNumber)
        if (!inputs.pkgName) {
            alert('PKGを選択してください')
        }
        else if (inputs.number > 96 || !inputs.number) {
            alert('正しいCH番号を入れてください')
        }
        else {
            // 計算部分
            let block = Math.floor(inputs.number / 16.1)
            let ifnumber = inputs.number - block * 16
            setVals({ ...inputs, blockNumber: block + 1, ifNumber: ifnumber })
            // モーダルを開く
            switch (inputs.pkgName) {
                case "VFCHP":
                case "VT-1":
                case "EQL":
                case "64kIF":
                case "OCU-5":
                    setIsOpen(true);
                    break
                case "SIG":
                case "VT-2":
                case "VT-3":
                    if (ifnumber % 4 === 0 || ifnumber === 3 || ifnumber === 7 || ifnumber === 11 || ifnumber === 15 || ifnumber === 16) {
                        alert('正しいCH番号を入れてください')
                    }
                    else { setIsOpen(true); }
                    break
                case "LHSD":
                    if (ifnumber > 9) {
                        alert('正しいCH番号を入れてください')
                    }
                    else { setIsOpen(true); }
                    break
                default:
                    alert('想定外の動作が起きました')
                    break
            }
        }
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <h1>DSM</h1>
            <h2>PKGを入力してください</h2>
            <p className="memo">（トラチケの読み方を追記したい）</p>
            <p>
                {/* PKG選択ボタン生成 */}
                {pkgs.map(pkg => (
                    <label className="panel-block" key={pkg}>
                        <input
                            type='button'
                            value={pkg}
                            onClick={() => { handleNameChange(`${pkg}`); }}
                        />
                    </label>
                ))}
            </p>
            <p className="memo">（↓inputs.pkgNameが変わったら色を変更したい）</p>
            <h3 style={inputs.pkgName === "" ? { background: "red" } : {}} >PKG：{inputs.pkgName}</h3>
            <h2>CHを入力してください</h2>
            <p className="memo">（トラチケの読み方を追記したい）</p>
            <Button handleInputNumberChange={handleInputNumberChange} />
            <Delete numberInit={numberInit} />
            <p className="memo">（↓inputs.chNumberが変わったら色を変更したい）</p>
            <h3 style={inputs.number === "" ? { background: "red" } : {}} >CH：{inputs.number}</h3>
            <input type="button" value="検索" className="mr-2" id="calculation" onClick={() => { calculationHilight() }} />
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => { closeModal() }}
                contentLabel="Modal"
            >
                <input type="button" value="閉じる" className="mr-2" onClick={() => { closeModal() }} />
                <Dsmresult blockNumber={inputs.blockNumber} ifNumber={inputs.ifNumber} pkgName={inputs.pkgName} number={inputs.number} />
            </Modal>

        </div>
    )
}
