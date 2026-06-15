import './sort.css'

const across = `<svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.04108 10.0415L-0.000971228 2.08343L1.98819 0.0732702L9.02516 7.03673L15.9886 -0.000242501L17.9988 1.98892L10.0407 10.031C9.77693 10.2975 9.41808 10.4483 9.04309 10.4503C8.66809 10.4522 8.30767 10.3052 8.04108 10.0415Z" fill="black"/></svg>`;

function Sort() {
    return (
        <div className='Sort'>
            <div></div>
            <div className='sortButton'>
                <button className='but flex gap-2 h-10'>
                    <p>Тип їжі</p>
                    <div dangerouslySetInnerHTML={{__html: across}} />
                </button>
                <button className='but flex gap-2 h-10'>
                    <p>Сортувати</p>
                    <div dangerouslySetInnerHTML={{__html: across}} />
                </button>
                <button className='but flex gap-2 h-10'>
                    <p>Найпопулярніші</p>
                    <div dangerouslySetInnerHTML={{__html: across}} />
                </button>
            </div>
        </div>
    )
}

export default Sort;