import React from 'react'
import Modal from 'react-modal'
import { Boadmresult, Button, Delete } from './index';
Modal.setAppElement('#root')
export default function Boadm() {
    // PKG選択ボタン用配列
    const pkgs = ['TRXA', 'XGBERF', 'GMXF64', 'TPF64', 'SCRM', 'OSC', 'OCM', 'DWS', 'DCF', 'SCIF3', 'FUN', 'EXBUS']

    // PKGとCHの入力管理
    const [inputs, setInputs] = React.useState(
        { pkgName: '', number1: '', number2: '', number3: '' }
    );

    const [baySelect, setBayselect] = React.useState('')
    const [unitSelect, setUnitselect] = React.useState('')


    // const [outputs,s]
    // モーダル管理
    const [modalIsOpen, setIsOpen] = React.useState(false);

    // inputsのpkgnameにPKG名を反映
    const handleNameChange = i => setInputs({ ...inputs, pkgName: i });

    // inputsのnumber1に入力を反映
    const handleInputNumber1Change = i => {
        setInputs({ ...inputs, number1: Number(inputs.number1 + i) });
    }

    // inputsのnumber2に入力を反映
    const handleInputNumber2Change = i => {
        setInputs({ ...inputs, number2: Number(inputs.number2 + i) });
    }

    // inputsのnumber3に入力を反映
    const handleInputNumber3Change = i => {
        setInputs({ ...inputs, number3: Number(inputs.number3 + i) });
    }

    // number初期化
    const number1Init = () => {
        setInputs({ ...inputs, number1: '' });
    }
    // number初期化
    const number2Init = () => {
        setInputs({ ...inputs, number2: '' });
    }
    // number初期化
    const number3Init = () => {
        setInputs({ ...inputs, number3: '' });
    }

    // 検索ボタン
    const calculationHilight = () => {

        // 入力に問題が無いか管理する変数
        let inputsConfirmation = true

        // PKG入力を管理
        if (!inputs.pkgName) {
            inputsConfirmation = false
            alert('PKGを選択してください')
        }

        // 架入力を管理
        switch (inputs.number1) {
            case 1:
                setBayselect('基本架')
                // setIsOpen(true);
                break
            case 2:
                setBayselect('増設架')
                // setIsOpen(true);
                break
            default:
                setBayselect('')
                inputsConfirmation = false
                alert('正しい情報を入力してください1')
                break
        }

        // ユニット入力を管理
        switch (inputs.number2) {
            case 1:
                setUnitselect('1')
                // setIsOpen(true);
                break
            case 2:
                setUnitselect('2')
                // setIsOpen(true);
                break
            default:
                setUnitselect('')
                inputsConfirmation = false
                alert('正しい情報を入力してください2')
                break
        }

        // スロット入力を管理
        if (!inputs.number3 || inputs.number3 > 19) {
            inputsConfirmation = false
            alert('正しい情報を入力してください3')
        }

        // console.log(baySelect)
        // console.log(unitSelect)

        // モーダルを開く
        if (inputsConfirmation) {
            setIsOpen(true);
        }

    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <h1>BOADM</h1>

            {/* PKG入力部 */}
            <h2>PKGを入力してください</h2>
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
            {/* 入力が無い時、背景をハイライト */}
            <h3 style={inputs.pkgName === '' ? { background: "red" } : {}} >PKG：{inputs.pkgName}</h3>

            {/* 架・ユニット・スロット入力部 */}
            <h2>トラチケ情報を入力してください</h2>
            {/* トラチケ入力ボタン */}
            <Button handleInputNumberChange={handleInputNumber1Change} />
            <Delete numberInit={number1Init} />
            <Button handleInputNumberChange={handleInputNumber2Change} />
            <Delete numberInit={number2Init} />
            <Button handleInputNumberChange={handleInputNumber3Change} />
            <Delete numberInit={number3Init} />
            {/* 削除ボタン */}
            {/* <Delete numberInit={number1Init} /> */}
            {/* 入力が無い時、背景をハイライト */}
            <h3 style={inputs.number1 === '' ? { background: "red" } : {}} >{inputs.number1}-{inputs.number2}-{inputs.number3}</h3>

            {/* 変換・モーダル起動部 */}
            {/* 検索ボタン */}
            <input type="button" value="検索" className="mr-2" id="calculation" onClick={() => { calculationHilight() }} />
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => { closeModal() }}
                contentLabel="Modal"
            >
                <input type="button" value="閉じる" className="mr-2" onClick={() => { closeModal() }} />
                {/* 結果呼び出し部 */}
                <Boadmresult bay={baySelect} unit={unitSelect} pkgName={inputs.pkgName} slot={inputs.number3} />
            </Modal>

        </div>
    )
}