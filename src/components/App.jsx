import { ListItem } from './ListItem/ListItem';
import { SearchBox } from './SearchBox/SearchBox';
import { Sidebar } from './Sidebar/Sidebar';
import { Workspace } from './Workspace/Workspace';

export const App = () => {
  return (
    <div>
      <ListItem />
      <SearchBox />
      <Sidebar />
      <Workspace />
    </div>
  );
};
