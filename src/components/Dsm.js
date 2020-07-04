import React from 'react'
// import { Link } from 'react-router-dom';
import Modal from 'react-modal'
import { Dsmresult, Button } from './index';
Modal.setAppElement('#root')
export default function Dsm() {
    // PKG選択ボタン用配列
    const pkgs = ([
        { pkgName: 'VFCHP', done: false, number: 0 },
        { pkgName: 'VT-1', done: false, number: 1 },
        { pkgName: 'EQL', done: false, number: 2 },
        { pkgName: '64kIF', done: false, number: 3 },
        { pkgName: 'OCU-5', done: false, number: 4 },
        { pkgName: 'VT-2', done: false, number: 5 },
        { pkgName: 'VT-3', done: false, number: 6 },
        { pkgName: 'SIG', done: false, number: 7 },
        { pkgName: 'LHSD', done: false, number: 8 },
    ]);

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
            setIsOpen(true);
        }
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <h1>DSM</h1>
            <h2>PKGを入力してください</h2>
            <p>
                {/* PKG選択ボタン生成 */}
                {pkgs.map(pkg => (
                    <label className="panel-block" key={pkg.pkgName}>
                        <input
                            type='button'
                            value={pkg.pkgName}
                            id={`pkg${pkg.number}`}
                            onClick={() => { handleNameChange(`${pkg.pkgName}`); }}
                        />
                    </label>
                ))}
            </p>
            <h3>PKG：{inputs.pkgName}</h3>
            <h2>CHを入力してください</h2>
            <Button handleInputNumberChange={handleInputNumberChange} numberInit={numberInit} />
            <h3>CH：{inputs.number}</h3>
            <input type="button" value="モーダル表示 検索" className="mr-2" id="calculation" onClick={() => { calculationHilight() }} />
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => { closeModal() }}
                contentLabel="Example Modal"
            >
                <input type="button" value="閉じる" className="mr-2" onClick={() => { closeModal() }} />
                <Dsmresult blockNumber={inputs.blockNumber} ifNumber={inputs.ifNumber} pkgName={inputs.pkgName} number={inputs.number} />
            </Modal>

        </div>
    )
}
