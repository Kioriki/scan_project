import React, { useState } from 'react';
import ResultContext from './createContext.jsx';

const ResultProvider = ({ children }) => {
    // Состояния для общих данных, данных и детальных данных
    const [generalData, setGeneralData] = useState(null);
    const [data, setData] = useState(null);
    const [detailsData, setDetailsData] = useState(null);

    // Оборачиваем дочерние компоненты в провайдер контекста
    return (
        <ResultContext.Provider value={{ generalData, setGeneralData, data, setData, detailsData, setDetailsData }}>
            {children}
        </ResultContext.Provider>
    );
};

export { ResultProvider };

