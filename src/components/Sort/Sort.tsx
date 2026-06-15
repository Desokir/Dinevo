"use client";
import { useState } from 'react';
import './sort.css'

const across = `<svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.04108 10.0415L-0.000971228 2.08343L1.98819 0.0732702L9.02516 7.03673L15.9886 -0.000242501L17.9988 1.98892L10.0407 10.031C9.77693 10.2975 9.41808 10.4483 9.04309 10.4503C8.66809 10.4522 8.30767 10.3052 8.04108 10.0415Z" fill="black"/></svg>`;

function Sort() {
    const [activeModal, setActiveModal] = useState<string | null>(null);
    const [selectedSort, setSelectedSort] = useState<string>('recommended');

    const closeModal = () => setActiveModal(null);

    const foodTypes = [
        'Азіатська', 'Алкоголь', 'Американ...', 'Арабська', 'Бургери', 'Вегитаріанська',
        'Гриль', 'Грузинська', 'Десерти', 'Європейс...', 'Італійська', 'Корисна і...',
        'Міжнарод...', 'Місцева і...', 'Морозиво', 'Пекарня', 'Пиво', 'Піца',
        'Сніданок', 'Солодощі', 'Суші', 'Українська', 'Фаст-фуд', 'Шаурма'
    ];

    return (
        <div className='Sort'>
            <div></div>
            <div className='sortButton'>
                
                <button className='but flex gap-2 h-10' onClick={() => setActiveModal('type')}>
                    <p>Тип їжі</p>
                    <div dangerouslySetInnerHTML={{__html: across}} />
                </button>

                <button className='but flex gap-2 h-10' onClick={() => setActiveModal('sort')}>
                    <p>Сортувати</p>
                    <div dangerouslySetInnerHTML={{__html: across}} />
                </button>

                <button className='but flex gap-2 h-10' onClick={() => setActiveModal('popular')}>
                    <p>Найпопулярніші</p>
                    <div dangerouslySetInnerHTML={{__html: across}} />
                </button>

            </div>

            {activeModal === 'type' && (
                <div className="sort-modal-overlay" onClick={closeModal}>
                    <div className="sort-modal-content type-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="sort-modal-close" onClick={closeModal}>&times;</button>
                        <h3 className="modal-title-left">Тип їжі</h3>
                        
                        <div className="type-grid">
                            {foodTypes.map((type, idx) => (
                                <div key={idx} className="type-grid-item">
                                    <div className="type-item-circle"></div>
                                    <span>{type}</span>
                                </div>
                            ))}
                        </div>

                        <button className="submit-results-btn" onClick={closeModal}>
                            Показати результати
                        </button>
                    </div>
                </div>
            )}

            {activeModal === 'sort' && (
                <div className="sort-modal-overlay" onClick={closeModal}>
                    <div className="sort-modal-content sort-select-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="sort-modal-close" onClick={closeModal}>&times;</button>
                        <h3 className="modal-title-left">Сортувати за</h3>
                        
                        <div className="sort-options-list">
                            <label className="sort-option-row">
                                <span className="option-label-with-icon">👤 Рекомендовано</span>
                                <input 
                                    type="radio" 
                                    name="sortOption" 
                                    checked={selectedSort === 'recommended'} 
                                    onChange={() => setSelectedSort('recommended')}
                                />
                                <span className="custom-radio"></span>
                            </label>

                            <label className="sort-option-row">
                                <span className="option-label-with-icon">📍 Поруч зі мною</span>
                                <input 
                                    type="radio" 
                                    name="sortOption" 
                                    checked={selectedSort === 'near'} 
                                    onChange={() => setSelectedSort('near')}
                                />
                                <span className="custom-radio"></span>
                            </label>

                            <label className="sort-option-row">
                                <span className="option-label-with-icon">👍 Оцінки</span>
                                <input 
                                    type="radio" 
                                    name="sortOption" 
                                    checked={selectedSort === 'rating'} 
                                    onChange={() => setSelectedSort('rating')}
                                />
                                <span className="custom-radio"></span>
                            </label>

                            <label className="sort-option-row">
                                <span className="option-label-with-icon">🛵 Комісія за доставку</span>
                                <input 
                                    type="radio" 
                                    name="sortOption" 
                                    checked={selectedSort === 'fee'} 
                                    onChange={() => setSelectedSort('fee')}
                                />
                                <span className="custom-radio"></span>
                            </label>
                        </div>

                        <button className="submit-results-btn" onClick={closeModal}>
                            Показати результати
                        </button>
                    </div>
                </div>
            )}

            {activeModal === 'popular' && (
                <div className="sort-modal-overlay" onClick={closeModal}>
                    <div className="sort-modal-content sort-select-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="sort-modal-close" onClick={closeModal}>&times;</button>
                        <h3 className="modal-title-left">Найпопулярніші</h3>
                        <div style={{ margin: '20px 0', fontSize: '14px', color: '#666' }}>
                            Контент популярних ресторанів.
                        </div>
                        <button className="submit-results-btn" onClick={closeModal}>
                            Показати результати
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Sort;