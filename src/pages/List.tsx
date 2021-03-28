import { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import MediaList from '../components/List/MediaList';
import PageLayout from '../components/PageLayout';
import ListStatusSelect from '../components/_menu/ListStatusSelect';
import { MediaListStatus, MediaType } from '../utils/enums';

type PagePropsType = { type: string; status: string };

interface PageProps extends RouteComponentProps<PagePropsType> {}

const List: React.FC<PageProps> = ({ match }) => {
  const [status, setStatus] = useState<MediaListStatus>(
    match.params.status.toUpperCase() as MediaListStatus
  );

  return (
    <PageLayout title="List">
      <ListStatusSelect status={status} setStatus={setStatus} />
      <MediaList
        type={match.params.type.toUpperCase() as MediaType}
        status={status}
      />
    </PageLayout>
  );
};

export default List;
