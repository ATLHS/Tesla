import React from 'react';
import PropTypes from 'prop-types';
import '../../css/modelDescription.css';

const ModelDescription = (props) => {
    return (
        <div className="row position-absolute w-100 d-flex justify-content-center m-auto modelDescription">
            <div className="col-md-5 d-flex justify-content-center align-items-center">
                <div className="col-md-4 col-sm-4 p-0">
                    <div className="text-center technical"><span className={`${props.color}`}>{props.technical1}</span></div>
                    <p className={`text-center ${props.color} m-auto modelInfo`}>{props.info1}</p>
                </div>
                <hr className={`border border-right ${props.hrColor} m-0 border-left-0 m-1`}/>
                <div className="col-md-4 col-sm-4 p-0">
                    <div className="text-center technical"><span className={`${props.color} d-flex justify-content-center align-items-center`}>{props.technical2}{props.technical2Bis}</span></div>
                    <p className={`text-center ${props.color} m-auto modelInfo`}>{props.info2}</p>
                </div>
                <hr className={`border border-right ${props.hrColor} m-0 border-left-0 m-1`}/>
                <div className="col-md-4 col-sm-4 p-0">
                    <div className="text-center technical"><span className={`${props.color}`}>{props.technical3}</span></div>
                    <p className={`text-center ${props.color} m-auto modelInfo`}>{props.info3}</p>
                </div>
            </div>
            <div className="col-md-2 d-flex jsutify-content-center align-items-center">
                <button type="button" className={`btn ${props.color} w-100 btn-sm rounded-pill cta`}>{props.cta}</button>
            </div>
        </div>
    );
}

ModelDescription.propTypes = {
    color: PropTypes.string.isRequired,
    cta: PropTypes.string.isRequired,
    technical1: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.element
      ]),
    info1: PropTypes.string.isRequired,
    technical2: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.element
      ]),
    info2: PropTypes.string.isRequired,
    technical3: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.element
      ]),
    info3: PropTypes.string.isRequired,
  };

ModelDescription.defaultProps = {
    color: 'text-white'
  };

export default ModelDescription;