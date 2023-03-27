import { Button } from 'components/Button/Button';
import css from './StatusFilter.module.css';
import { statusFilters } from '../../redux/constants';
import { getStatusFilter } from '../../redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { setStatusFilter } from '../../redux/actions';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  // Отримуємо значення фільтра із стану Redux
  const filter = useSelector(getStatusFilter);
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));
  return (
    <div>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
