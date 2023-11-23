import PropTypes from 'prop-types';
// import { fallbackImage, skeleton } from '../../helpers/utils';
// import LazyImage from '../lazy-image';

const Introduction = ({ introduction }) => {
  //introduction.introduciton, introducition.career
  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="grid place-items-center py-8">
        <div className="text-start mx-auto px-8 w-full">
          {introduction.introduction && (
            <h5 className="font-bold text-2xl">
              <span className="text-base-content opacity-70">Introduction</span>
            </h5>
          )}
          <div className="mt-3 text-base-content text-opacity-60 font-mono">
            <p className="text-base-content text-sm opacity-70">
              {introduction.introduction}
            </p>
          </div>

          <br />

          {introduction.introduction && (
            <h5 className="font-bold text-2xl">
              <span className="text-base-content opacity-70">
                Career Summary
              </span>
            </h5>
          )}
          <div className="mt-3 text-base-content text-opacity-60 font-mono">
            <span className="text-base-content text-sm opacity-70">
              {introduction.career}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

Introduction.propTypes = {
  introduction: PropTypes.object,
};

export default Introduction;
