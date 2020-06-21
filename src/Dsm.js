import React from 'react'
import { Link } from 'react-router-dom'

export default function Dsm() {
    // これを親に書けば良い？
    // state(変更可能)する時はset...と使う
    // これを子コンポーネント化したい
    const [pkgs, setPkgs] = React.useState([
        { pkgname: 'VFCHP', done: false },
        { pkgname: 'VT-1', done: false },
        { pkgname: 'EQL', done: false },
        { pkgname: '64kIF', done: false },
        { pkgname: 'OCU-5', done: false },
        { pkgname: 'VT-2', done: false },
        { pkgname: 'VT-3', done: false },
        { pkgname: 'SIG', done: false },
        { pkgname: 'LHSD', done: false },
    ]);

    // stateのプロパティを変更するテスト
    const [vals, setVals] = React.useState(
        { value: 'value初期値', number: 'number初期値' }
    );

    // スプリット演算子
    const handlenameChange = val => setVals({ ...vals, value: val });
    // pkgのdoneを変更するss
    const handledoneChange = () => (setPkgs({ ...pkgs, done: true }))


    // 検索ボタン用配列
    const inputnumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    // 窓に数値を入れる
    const handleinputnumberChange = i => {
        let input = document.getElementById('numbers')
        input.value = input.value + i
        // あとで消す
        setVals({ ...vals, number: input.value });
    }
    // 数値初期化
    const number_init = () => {
        let input = document.getElementById('numbers')
        input.value = ""
        // あとで消す
        setVals({ ...vals, number: "number初期値" });
    }

    // 検索ボタン
    const Calculation_Hilight = () => {
        const hantei = pkgs.filter(pkg => (pkg.done === true))
        if (hantei.length < 1) {
            console.log('pkg.doneが全部false')
            alert('pkgが選択されていない')
        }
        else {
            console.log('pkg.doneのどれかtrue')
        }
    }



    return (
        <div>
            <h1>Dsm</h1>
            <p>このコンポーネントにツールを書く</p>
            <Link to="/Afalse">Appのaがtrueの時、/にリダイレクト</Link>


            <p>PKGを入力してください</p>
            <p>
                {pkgs.map(pkg => (
                    <label className="panel-block">
                        <input
                            type='button'
                            value={pkg.pkgname}
                            onClick={() => { handlenameChange(`${pkg.pkgname}`) }}
                        />
                    </label>
                ))}
            </p>
            {/* <NumberInput onChange={handlenameChange} /> */}
            <p>PKG：{vals.value}</p>
            <p>CH：{vals.number}</p>
            <p>CHを入力してください</p>
            <p>
                {inputnumbers.map(number => (
                    <label className="input-number">
                        <input
                            type='button'
                            value={number}
                            onClick={() => { handleinputnumberChange(`${number}`) }}
                        />
                    </label>
                ))}
            </p>
            <input
                id='numbers'
                readOnly
            />
            <input
                type='button'
                value='DELETE'
                onClick={() => { number_init() }}
            />
            <input
                type='button'
                value='検索'
                onClick={() => { Calculation_Hilight() }}
            />
        </div>
    )
}