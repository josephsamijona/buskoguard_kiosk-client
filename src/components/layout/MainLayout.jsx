import 'react';
import PropTypes from 'prop-types';
import Header from './Header';

const MainLayout = ({ children }) => {
  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default MainLayout;