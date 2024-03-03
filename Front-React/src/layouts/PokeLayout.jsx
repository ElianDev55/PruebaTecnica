import '../styles/StylePokeLayout.css';

export const PokeLayout = ({ children }) => {

    return (
        <>
        
        <div className="card-container">
            
            {children}
        </div>
        </>
    );
};