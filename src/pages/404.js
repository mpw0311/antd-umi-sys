import { Page, Exception } from 'components';

export default function () {
  return (
    <Page
      inner={true}
    >
      <Exception
        type={404}
        backText={'返回首页'}
        title={'404'}
        desc={'抱歉，你访问的页面不存在'}
      />
    </Page>
  );
}
