import React from 'react'
import { Link } from 'react-router-dom';
import Modal from 'react-modal'
import { Dsmresult, Button } from './index';

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
    // 検索ボタン用配列
    const inputNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    // PKGとCHの入力管理
    const [inputs, setVals] = React.useState(
        { pkgName: '', chNumber: '', blockNumber: '', ifNumber: '' }
    );
    // モーダル管理
    const [modalIsOpen, setIsOpen] = React.useState(false);
    // inputsのpkgnameにPKG名を反映
    const handleNameChange = i => setVals({ ...inputs, pkgName: i });
    // inputsのchnumberにch数を反映
    const handleInputNumberChange = i => {
        setVals({ ...inputs, chNumber: Number(inputs.chNumber + i) });
    }
    // chnumber初期化
    const numberInit = () => {
        setVals({ ...inputs, chNumber: "" });
    }

    // 検索ボタン
    const calculationHilight = () => {
        // console.log(inputs.chNumber)
        if (!inputs.pkgName) {
            alert('PKGを選択してください')
        }
        else if (inputs.chNumber > 96 || !inputs.chNumber) {
            alert('正しいCH番号を入れてください')
        }
        else {
            // 計算部分
            let block = Math.floor(inputs.chNumber / 16.1)
            let ifnumber = inputs.chNumber - block * 16
            setVals({ ...inputs, blockNumber: block + 1, ifNumber: ifnumber })
            // モーダルを開く
            setIsOpen(true);
        }
    }

    //モーダルテスト

    // function openModal() {
    //     calculationHilight();
    //     // setIsOpen(true);
    // }
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <h1>DSM</h1>
            <p>このコンポーネントにツールを書く</p>
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
            <p>
                {/* CH入力ボタン生成 */}
                {inputNumbers.map(number => (
                    <label className="input-number" key={number}>
                        <input
                            type='button'
                            value={number}
                            onClick={() => { handleInputNumberChange(`${number}`) }}
                        />
                    </label>
                ))}
            </p>
            <input
                type='button'
                value='DELETE'
                onClick={() => { numberInit() }}
            />
            <h3>CH：{inputs.chNumber}</h3>
            {/* <input
                type='button'
                value='検索'
                onClick={() => { calculationHilight(); }}
            /> */}
            {/* <Link to="/dsm/result">検索！</Link> */}
            {/* <h3>BLOCK:{inputs.blockNumber}</h3>
            <h3>IF:{inputs.ifNumber}</h3> */}
            <input type="button" value="モーダル表示 検索" className="mr-2" onClick={() => { calculationHilight() }} />
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <input type="button" value="閉じる" className="mr-2" onClick={closeModal} />
                <Dsmresult blockNumber={inputs.blockNumber} ifNumber={inputs.ifNumber} pkgName={inputs.pkgName} chNumber={inputs.chNumber}/>
            </Modal>

            {/* <Dsmresult blockNumber={inputs.blockNumber} ifNumber={inputs.ifNumber} pkgName={inputs.pkgName} chNumber={inputs.chNumber} /> */}
            <Link to="/Afalse">Appのfがtrueの時、/にリダイレクト</Link>
            <Button pkgs={pkgs} handleNameChange={handleNameChange} inputs={inputs} handleInputNumberChange={handleInputNumberChange} />


        </div>
    )
}
