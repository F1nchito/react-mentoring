import React from 'react';

const SearchField = ({className, value, onChange, onEnter}) => {
    return (<div className={className}>
                <p>find your movie</p>
                <input type="text" value={value} onChange={e => onChange(e.target.value)} 
                onKeyPress={e =>{ (e.key === 'Enter' ? onEnter() : null ) }} />

            </div>)
}
export default SearchField;