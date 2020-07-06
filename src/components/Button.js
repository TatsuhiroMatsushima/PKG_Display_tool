import React from 'react'

export default function Button(props) {
    const inputNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <div>
            <p>
                {/* 入力ボタン生成  */}
                {inputNumbers.map(number => (
                    <label className="input-number" key={number}>
                        <input
                            type='button'
                            value={number}
                            onClick={() => { props.handleInputNumberChange(`${number}`) }}
                        />
                    </label>
                ))}
            </p>
            <input
                type='button'
                value='DELETE'
                onClick={() => { props.numberInit() }}
            />
        </div>
    )
}