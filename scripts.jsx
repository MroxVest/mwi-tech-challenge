const location = ReactDOM.createRoot(document.getElementById('array-row'));
function HomePage() {
    const array1 = ['Matt Johnson', 'Matt Johnson', 'Bart Paden', 'Ryan Doss', 'Jared Malcolm'];
    const array2 = ['Matt Johnson', 'Bart Paden', 'Bart Paden', 'Jordan Heigle', 'Jordan Heigle', 'Tyler Viles'];
    const resultArray = ['test', 'test'];

    return (
            <>
                <ul>
                resultArray.map((name) => (
                    <li key={index}>{name}</li>
                    ))
                </ul>
            </>
    );
}

location.render(HomePage);