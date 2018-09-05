import { Breadcrumb, Announcement } from 'components';

function PageHeader(props) {
    const {
        pathtitles,
        location,
        title,
        description
    } = props;

    return (
        <div>
            <Announcement
                title={title}
                description={description}
            />
            <Breadcrumb
                pathtitles={pathtitles}
                location={location}
            />
        </div>
    );
}
export default PageHeader;