import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import Smurf from './Smurf';

const SmurfList = props => {
    
    const getSmurfs = e => {
        e.preventDefault();
        
    }
    
    return (
        <div>
            {props.gettingSmurfs
                ? <Loader 
                    type="Bars"
                    color="orange"
                    height={80}
                    width={80}
                  />
                : <div>
                    <button onClick={getSmurfs}>
                        Get Smurfs
                    </button>
                    {props.smurfs.map(smurf => {
                        return <Smurf smurf={smurf} />
                    })}
                  </div>
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        ...state,
        gettingSmurfs: state.gettingSmurfs,
        error: state.error,
        smurfs: state.smurfs
    }
}

export default connect(
    mapStateToProps,
    {}
)(SmurfList);