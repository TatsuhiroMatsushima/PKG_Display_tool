import React from 'react'
import { Link } from 'react-router-dom';
import Modal from 'react-modal'


export default function Dsm() {
    // これを親に書けば良い？
    // state(変更可能)する時はset...と使う
    // これを子コンポーネント化したい
    const pkgs = ([
        { pkgname: 'VFCHP', done: false, number: 0 },
        { pkgname: 'VT-1', done: false, number: 1 },
        { pkgname: 'EQL', done: false, number: 2 },
        { pkgname: '64kIF', done: false, number: 3 },
        { pkgname: 'OCU-5', done: false, number: 4 },
        { pkgname: 'VT-2', done: false, number: 5 },
        { pkgname: 'VT-3', done: false, number: 6 },
        { pkgname: 'SIG', done: false, number: 7 },
        { pkgname: 'LHSD', done: false, number: 8 },
    ]);

    // PKGとCHの入力管理
    const [inputs, setVals] = React.useState(
        { pkgname: '', chnumber: '', blocknumber: '', ifnumber: '' }
    );

    // inputsのpkgnameにPKG名を反映
    const handlenameChange = val => setVals({ ...inputs, pkgname: val });

    // 検索ボタン用配列
    const inputnumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    // 窓に数値を入れる
    // inputsのchnumberにch数を反映
    const handleinputnumberChange = i => {
        // let input = document.getElementById('numbers')
        // input.value = input.value + i
        setVals({ ...inputs, chnumber: Number(inputs.chnumber + i) });
    }
    // chnumber初期化
    const number_init = () => {
        // let input = document.getElementById('numbers')
        // input.value = ""
        setVals({ ...inputs, chnumber: "" });
    }

    // 検索ボタン
    const Calculation_Hilight = () => {
        console.log(inputs.chnumber)
        let block = Math.floor(inputs.chnumber / 16.1)
        let ifnumber = inputs.chnumber - block * 16
        setVals({ ...inputs, blocknumber: block + 1, ifnumber: ifnumber })
        inputs.blocknumber = block + 1
        inputs.ifnumber = ifnumber
        console.log(`block:${inputs.blocknumber} if:${inputs.ifnumber}`)
    }

    //モーダルテスト
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }



    return (
        <div>
            <h1>Dsm</h1>
            <p>このコンポーネントにツールを書く</p>
            <Link to="/Afalse">Appのaがtrueの時、/にリダイレクト</Link>
            <h2>PKGを入力してください</h2>
            <p>
                {/* PKG選択ボタン生成 */}
                {pkgs.map(pkg => (
                    <label className="panel-block" key={pkg.pkgname}>
                        <input

                            type='button'
                            value={pkg.pkgname}
                            id={`pkg${pkg.number}`}
                            onClick={() => {
                                handlenameChange(`${pkg.pkgname}`);
                                // handledoneChange(`${pkg.number}`)
                            }
                            }
                        />
                    </label>
                ))}
            </p>
            <h3>PKG：{inputs.pkgname}</h3>

            <h2>CHを入力してください</h2>
            <p>
                {/* CH入力ボタン生成 */}
                {inputnumbers.map(number => (
                    <label className="input-number" key={number}>
                        <input
                            type='button'
                            value={number}
                            onClick={() => {
                                handleinputnumberChange(`${number}`)
                            }
                            }
                        />
                    </label>
                ))}
            </p>
            <input
                type='button'
                value='DELETE'
                onClick={() => { number_init() }}
            />
            <h3>CH：{inputs.chnumber}</h3>
            <input
                type='button'
                value='検索'
                onClick={() => { Calculation_Hilight(); openModal() }}
            />
            {/* <Link to="/dsm/result">検索！</Link> */}
            <h3>BLOCK:{inputs.blocknumber}</h3>
            <h3>IF:{inputs.ifnumber}</h3>


            {/* <input type="button" value="モーダル表示" className="mr-2" onClick={openModal} /> */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <input type="button" value="閉じる" className="mr-2" onClick={closeModal} />
                <h3>BLOCK:{inputs.blocknumber}</h3>
                <h3>IF:{inputs.ifnumber}</h3>
            </Modal>
        </div>
    )
}