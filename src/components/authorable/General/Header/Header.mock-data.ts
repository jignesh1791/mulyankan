import { HeaderProps } from './Header';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: HeaderProps = {
  uid: '255ca095-efb5-4f7a-8c6f-bd75d73c2d85',
  componentName: 'Header',
  dataSource: '{04FF4F94-0437-4C29-B249-DCDB7EBBF186}',
  fields: {
    HeaderNavigationLinks: [
      {
        id: '030a4d18-f112-4bbb-a90f-335bd56d229a',
        url: '/Data/Navigations/Header/News',
        name: 'News',
        displayName: 'News',
        fields: {
          LinkField: {
            value:
              '<link text="" anchor="News" linktype="internal" class="" title="News" target="" querystring="" id="{EB84166A-9CA0-4B2B-BE62-880D9AFCE053}" />',
          },
        },
      },
      {
        id: 'f680482c-4b63-4f31-a206-b124375f8812',
        url: '/Data/Navigations/Header/Player',
        name: 'Player',
        displayName: 'Player',
        fields: {
          LinkField: {
            value:
              '<link text="" anchor="Player" linktype="internal" class="" title="Player" target="" querystring="" id="{22091B41-5DC6-4EE0-8716-33B2EE6F317F}" />',
          },
        },
      },
      {
        id: '4b9990f2-cedc-43e3-b019-9605c450e410',
        url: '/Data/Navigations/Header/Teams',
        name: 'Teams',
        displayName: 'Teams',
        fields: {
          LinkField: {
            value:
              '<link text="" anchor="Teams" linktype="internal" class="" title="Teams" target="" querystring="" id="{D913D8DE-8A04-4C61-A442-4012D86AF8EC}" />',
          },
        },
      },
    ],
    LogoImage: {
      value: {
        src: '/-/media/Project/Mulyankan/jss-starter-jss/Header/Horizontal_Digital_Black_CMYK.png?h=360&iar=0&w=432&hash=C8CC9578CC1E33B842DB53492872074F',
        alt: 'Horizontal',
        width: '432',
        height: '360',
      },
    },
  },
};

export const noData = {
  rnder: {},
  params: [],
};

export default defaultData;
