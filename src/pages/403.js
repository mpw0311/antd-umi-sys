import { Page, Exception } from '@components';

export default function () {
    return (
        <Page
            flex={true}
            showHeader={false}
        >
            <Exception
                type={403}
                backText={'返回首页'}
                title={'403'}
                desc={'抱歉，你无权访问该页面'}
            />
        </Page>
    );
}
