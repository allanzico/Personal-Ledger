import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../css/main.css';

class App extends Component {
    render() {
        return (
           <div className="h-64">
               <div className="p-4 m-4 bg-green-600">
                <h1 className="text-2xl font-bold text-white">
                    TAILWIND TEST
                </h1>
               </div>
               <div className="p-4 m-4 bg-green-400 h-full">
                    <h2 className="text-green-900">
                        This is the first test!
                    </h2>
                   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                       What a button!
                   </button>
               </div>
           </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
