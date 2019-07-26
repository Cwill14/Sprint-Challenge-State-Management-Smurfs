import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getSmurfsData } from '../store/actions';
import Smurf from './Smurf';

const SmurfList = props => {
    
    const getSmurfs = e => {
        e.preventDefault();
        props.getSmurfsData();
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
                  </div>
            }
            {props.smurfs.map(smurf => {
                return <Smurf smurf={smurf} key={smurf.id} />
            })}
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
    { getSmurfsData }
)(SmurfList);