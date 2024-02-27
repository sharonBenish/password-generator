function Strength({strength}){
    const bars = [...Array(4)].map((_, index) => {
        return <div key={index}  className={index <= strength && strength ==0? 'too_weak bar':index <= strength && strength ==1?'weak bar': index <= strength && strength ==2?'medium bar': index <= strength && strength ==3? 'strong bar': 'bar'}></div>
    })

    function strengthDescription(){
        if(strength===0){
            return 'TOO WEAK'
        }
        else if(strength === 1){
            return 'WEAK'
        }
        else if (strength === 2){
            return 'MEDIUM'
        }
        else {
            return 'STRONG'
        }
    }
    return(
        <>
            <div className="card strength flex-between">
                <p>STRENGTH</p>
                <div className='flex-between'>
                    <p className='strength_text'>{strengthDescription()}</p>
                    <div className='bars flex-between'>
                        {bars}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Strength