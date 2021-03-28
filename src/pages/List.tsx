import { RouteComponentProps } from 'react-router';
import MediaList from '../components/List/MediaList';
import PageLayout from '../components/PageLayout';
import { MediaListStatus, MediaType } from '../utils/enums';

type PagePropsType = { type: string; status: string };

interface PageProps extends RouteComponentProps<PagePropsType> {}

const List: React.FC<PageProps> = ({ match }) => {
  return (
    <PageLayout title="List">
      <MediaList
        type={match.params.type.toUpperCase() as MediaType}
        status={match.params.status.toUpperCase() as MediaListStatus}
      />
    </PageLayout>
  );
};

export default List;
