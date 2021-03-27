import MediaList from '../components/List/MediaList';
import PageLayout from '../components/PageLayout';
import { MediaListStatus, MediaType } from '../utils/enums';

const List: React.FC = () => {
  return (
    <PageLayout title="List">
      <MediaList type={MediaType.ANIME} status={MediaListStatus.CURRENT} />
    </PageLayout>
  );
};

export default List;
