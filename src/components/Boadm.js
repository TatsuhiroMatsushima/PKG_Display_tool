import React from 'react'
import Modal from 'react-modal'
import { Boadmresult, Button, Delete } from './index';
Modal.setAppElement('#root')
export default function Boadm() {
    // PKG選択ボタン用配列
    const pkgs = ['XGBERF', 'GMXF64', 'SCRM', 'SCIF3', 'EXBUS', 'TRXA', 'a', 'b', 'c']

    // PKGとCHの入力管理
    const [inputs, setVals] = React.useState(
        { pkgName: '', number1: '', number2: '', number3: '', baySelect: '', unitSelect: '' }
    );
    // モーダル管理
    const [modalIsOpen, setIsOpen] = React.useState(false);

    // inputsのpkgnameにPKG名を反映
    const handleNameChange = i => setVals({ ...inputs, pkgName: i });

    // inputsのnumber1にch数を反映
    const handleInputNumber1Change = i => {
        setVals({ ...inputs, number1: Number(inputs.number1 + i) });
    }

    // inputsのnumber2にch数を反映
    const handleInputNumber2Change = i => {
        setVals({ ...inputs, number2: Number(inputs.number2 + i) });
    }

    // inputsのnumber3にch数を反映
    const handleInputNumber3Change = i => {
        setVals({ ...inputs, number3: Number(inputs.number3 + i) });
    }

    // number初期化
    const numberInit = () => {
        setVals({ ...inputs, number1: '', number2: '', number3: '' });
    }

    // 検索ボタン
    const calculationHilight = () => {
        // if (!inputs.pkgName) {
            // alert('PKGを選択してください')
        // }
         {
            switch (inputs.number1) {
                case 1:
                    setVals({ ...inputs, baySelect: '基本架' })
                    // setIsOpen(true);
                    break
                case 2:
                    setVals({ ...inputs, baySelect: '増設架' })
                    // setIsOpen(true);
                    break
                default:
                    // alert(`${inputs.baySelect}`)
                    break
            };

            switch (inputs.number2) {
                case 1:
                    setVals({ ...inputs, unitSelect: '1' })
                    // setIsOpen(true);
                    break
                case 2:
                    setVals({ ...inputs, unitSelect: '2' })
                    // setIsOpen(true);
                    break
                default:
                    // alert('想定外の動作が起きました2')
                    break
            }

        }
        console.log(inputs)
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <h1>BOADM</h1>
            <h2>PKGを入力してください</h2>
            {/* <p className="memo">（トラチケの読み方を追記したい）</p> */}
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
            <h3 style={inputs.pkgName === '' ? { background: "red" } : {}} >PKG：{inputs.pkgName}{inputs.baySelect}</h3>
            <h2>トラチケ情報を入力してください</h2>
            {/* トラチケ入力ボタン */}
            <Button handleInputNumberChange={handleInputNumber1Change} />
            <Button handleInputNumberChange={handleInputNumber2Change} />
            <Button handleInputNumberChange={handleInputNumber3Change} />
            {/* 削除ボタン */}
            <Delete numberInit={numberInit} />


            <h3 style={inputs.number1 === '' ? { background: "red" } : {}} >{inputs.number1}-{inputs.number2}-{inputs.number3}</h3>
            <input type="button" value="検索" className="mr-2" id="calculation" onClick={() => { calculationHilight() }} />
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => { closeModal() }}
                contentLabel="Modal"
            >
                <input type="button" value="閉じる" className="mr-2" onClick={() => { closeModal() }} />
                <Boadmresult baySelect={inputs.baySelect} unitSelect={inputs.unitSelect} pkgName={inputs.pkgName} slot={inputs.number3} />
            </Modal>

        </div>
    )
}
