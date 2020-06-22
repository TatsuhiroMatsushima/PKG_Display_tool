import React from 'react'

export default function Button(props) {
    return (
        <div>
            <h1>Button</h1>
            <p>propsの確認{props.pkgs[0].pkgName}</p>
            <p>コンポーネント分割テスト 副作用使った方が良い？</p>
            <p>
                {props.pkgs.map(pkg => (
                    <label className="panel-block" key={pkg.pkgName}>
                        <input
                            type='button'
                            value={pkg.pkgName}
                            id={`pkg${pkg.number}`}
                            onClick={() => { props.handleNameChange(`${pkg.pkgName}`); }}
                        />
                    </label>
                ))}
            </p>
        </div>
    )
}