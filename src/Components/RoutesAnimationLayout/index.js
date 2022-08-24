import { CSSTransition, TransitionGroup } from 'react-transition-group';

const RoutesAnimationLayout = ({ children, locationKey }) => {
  return (
    <TransitionGroup component={null}>
      <CSSTransition key={locationKey} classNames="page" timeout={300}>
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default RoutesAnimationLayout;