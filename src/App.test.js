import axios from "axios";
import { render, screen } from "@testing-library/react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });
import { App } from "./App";
import { fetchData } from "./api";

jest.mock("axios");

describe("fetchData", () => {
  it("fetches successfully data from an API", async () => {
    const data = {
      total: 1539917,
      totalHits: 500,
      hits: [
        {
          id: 7050884,
          pageURL:
            "https://pixabay.com/photos/clouds-sky-atmosphere-blue-sky-7050884/",
          type: "photo",
          tags: "clouds, sky, atmosphere",
          previewURL:
            "https://cdn.pixabay.com/photo/2022/03/06/05/30/clouds-7050884_150.jpg",
          previewWidth: 150,
          previewHeight: 100,
          webformatURL:
            "https://pixabay.com/get/g2be619255af37c9c98cb3381d4c129370ec4813c06cd14d6e949ece1708609dc2a73f42f6d8ee97eb33def50577cf138_640.jpg",
          webformatWidth: 640,
          webformatHeight: 427,
          largeImageURL:
            "https://pixabay.com/get/gbb5bf15e0ef916606746353ca0f68bf2f4003f6ef6386783841d1b6613f2fd77b633ea56e976cb4f933f3dce24749f43f24301294d7226c88fb7018ff85f9583_1280.jpg",
          imageWidth: 5184,
          imageHeight: 3456,
          imageSize: 2499645,
          views: 142212,
          downloads: 100787,
          collections: 3680,
          likes: 151,
          comments: 41,
          user_id: 25073177,
          user: "Mint_Foto",
          userImageURL: "",
          id_hash: "7050884",
          fullHDURL:
            "https://pixabay.com/get/g1cd9d6bd563f43acca5800e3815f7d0cba4488a6fc1079ab094e0f7000e32504f9ab5bd50375b0f85d3cdefe4a9f9bcda842087b4fef4020b7289f0c215dac19_1920.jpg",
          imageURL:
            "https://pixabay.com/get/g0c752580fd38e883f77b28aed49da959c2bc607f2af7e6da81c6b32ceefc5ae1b46b9c9c99ba5566717b0620b2989ebd.jpg",
        },
        {
          id: 7039471,
          pageURL:
            "https://pixabay.com/photos/sea-rainbow-rainfall-subtropical-7039471/",
          type: "photo",
          tags: "sea, rainbow, rainfall",
          previewURL:
            "https://cdn.pixabay.com/photo/2022/02/28/15/28/sea-7039471_150.jpg",
          previewWidth: 150,
          previewHeight: 100,
          webformatURL:
            "https://pixabay.com/get/ge0b9fc9439e1301419b825de9a94b336734738ca4f11af64b790173e261931e3bb8d8a9d9ce8f892c2fd05094afc3e82_640.jpg",
          webformatWidth: 640,
          webformatHeight: 427,
          largeImageURL:
            "https://pixabay.com/get/g7f6ff8a3700cb1293ce742d526a01ea023e93a3f6ce9b6187282e9bda7abcca6546aa1fb5b128d48cf2d6bf24a621956fa8ac122c6e95e547f3979fe2b880ee2_1280.jpg",
          imageWidth: 3150,
          imageHeight: 2100,
          imageSize: 1804466,
          views: 143969,
          downloads: 112256,
          collections: 3105,
          likes: 225,
          comments: 95,
          user_id: 4749850,
          user: "Kanenori",
          userImageURL:
            "https://cdn.pixabay.com/user/2022/03/02/12-57-29-871_250x250.jpg",
          id_hash: "7039471",
          fullHDURL:
            "https://pixabay.com/get/g793a83191c555a9c9e4c33d95663811753a326c1302a30e8ba7b506ac0a9a2763364e748e12f6cc48f29db3dad62390e3b654c5781d7a6f78d4ae8ac2571d372_1920.jpg",
          imageURL:
            "https://pixabay.com/get/g3fed68209fcbdacc862a7e25c423259e345684b2d2909006b0d68bd4e75a19972d8dbf6eaefa98dfbd38b4ee1aee7f47.jpg",
        },
        {
          id: 6792528,
          pageURL:
            "https://pixabay.com/photos/tree-park-bench-autumn-fall-season-6792528/",
          type: "photo",
          tags: "tree, park bench, autumn",
          previewURL:
            "https://cdn.pixabay.com/photo/2021/11/13/23/06/tree-6792528_150.jpg",
          previewWidth: 150,
          previewHeight: 100,
          webformatURL:
            "https://pixabay.com/get/g52b5248874c97338d7f155314818b990628cb59a5f73ec1cb5053d756354d70dc1befdce54f6fcd08c894bcb651485b0_640.jpg",
          webformatWidth: 640,
          webformatHeight: 427,
          largeImageURL:
            "https://pixabay.com/get/g6ad604c01af66f6dee3986c52f4d7cc89c271f58c98c27bf8ab8eee2604ce52554c2fa60880532d27bc577c090c1da556384db96a3599568b03838562b4ec764_1280.jpg",
          imageWidth: 6000,
          imageHeight: 4000,
          imageSize: 11775993,
          views: 936478,
          downloads: 853885,
          collections: 13337,
          likes: 489,
          comments: 102,
          user_id: 7645255,
          user: "jplenio",
          userImageURL:
            "https://cdn.pixabay.com/user/2022/03/16/09-17-26-162_250x250.jpg",
          id_hash: "6792528",
          fullHDURL:
            "https://pixabay.com/get/g708ad7e1bad04138129788d5a4692ce5b49d72caa4682c09f388616033b368e4a89330ea6350e8d273d076cab0fbe9c794accbdab5103415acfceedfc20540f5_1920.jpg",
          imageURL:
            "https://pixabay.com/get/g28712eacb437ebc93bb78524bc73c2d7fcbb71c24f889b6f550632da9b0431c673d67f33d4ecd7f54cd8f3f925c69060.jpg",
        },
        {
          id: 7047522,
          pageURL:
            "https://pixabay.com/photos/river-stream-brook-creek-morning-7047522/",
          type: "photo",
          tags: "river, stream, brook",
          previewURL:
            "https://cdn.pixabay.com/photo/2022/03/04/15/14/river-7047522_150.jpg",
          previewWidth: 150,
          previewHeight: 100,
          webformatURL:
            "https://pixabay.com/get/gcc384caed7050f2373d950580d8b8447c4846294119142a23e356e75fcbc8a51c91db9b77de794114b08c2caf2541974_640.jpg",
          webformatWidth: 640,
          webformatHeight: 427,
          largeImageURL:
            "https://pixabay.com/get/g3f550ee132f6ce5b4535404fe6d597087d2770355d81aef1f48fb78ae279438d572418775722a4067524be1f29577725ee0333bb0259e3890c93e8e5f60c85f3_1280.jpg",
          imageWidth: 5472,
          imageHeight: 3648,
          imageSize: 2734019,
          views: 81571,
          downloads: 68190,
          collections: 1363,
          likes: 90,
          comments: 20,
          user_id: 15978497,
          user: "Csillagvirág",
          userImageURL:
            "https://cdn.pixabay.com/user/2021/08/15/19-14-53-292_250x250.jpg",
          id_hash: "7047522",
          fullHDURL:
            "https://pixabay.com/get/gc34ad896ed63ab6b79ce1aa09d2bacca5508c14324aa0bec558fce67f79c7b8522fccd24d046395ce7de5b6b89a25737391eca9a7accf2aa7474ac5728df1ee4_1920.jpg",
          imageURL:
            "https://pixabay.com/get/g62cd34bfe7b945b6f696455c3037e55b57f129a8c3ae66486ec0f788b7a4ef7c12e12695daf54f52701fa3bece0be900.jpg",
        },
        {
          id: 6938478,
          pageURL:
            "https://pixabay.com/illustrations/windows-design-art-abstract-6938478/",
          type: "illustration",
          tags: "windows, design, art",
          previewURL:
            "https://cdn.pixabay.com/photo/2022/01/15/02/07/windows-6938478_150.jpg",
          previewWidth: 150,
          previewHeight: 100,
          webformatURL:
            "https://pixabay.com/get/g2a658071cb0d918d12c8e90fd9ebb4bf35509959e7f99e88a11b3f6768bc7e225ce7a23d5c8a99da2e161bad7a7f2f5a_640.jpg",
          webformatWidth: 640,
          webformatHeight: 427,
          largeImageURL:
            "https://pixabay.com/get/g9f30f78341460ba0d47886ee6ac954d7b02e9c940155aa7fb9094d39845a11dfe846bfcb024c6868690f785a613759fa16ed448aca41dfbd72b8ab19219ba21d_1280.jpg",
          imageWidth: 3000,
          imageHeight: 2000,
          imageSize: 945686,
          views: 166177,
          downloads: 134770,
          collections: 5691,
          likes: 299,
          comments: 61,
          user_id: 19795624,
          user: "wastmpds",
          userImageURL:
            "https://cdn.pixabay.com/user/2022/01/15/02-12-08-87_250x250.png",
          id_hash: "6938478",
          fullHDURL:
            "https://pixabay.com/get/gc18175274e32cc31d23d80688f9ba44da3af23efd6e18622bc7996ff091c50217a6e802a8620c555be8414de335fd083d0200a145dafefec8d850c3dae2c6a5c_1920.jpg",
          imageURL:
            "https://pixabay.com/get/gef6c751538fbcc62b74e2849c3b1f0b1f877dfa2c751341c42da54b7a859e35834b89c50fa0fef1eb6de9d987b08b538.jpg",
        },
        {
          id: 7079550,
          pageURL:
            "https://pixabay.com/photos/crocus-flowers-spring-plant-7079550/",
          type: "photo",
          tags: "crocus, flowers, spring",
          previewURL:
            "https://cdn.pixabay.com/photo/2022/03/19/21/11/crocus-7079550_150.jpg",
          previewWidth: 150,
          previewHeight: 100,
          webformatURL:
            "https://pixabay.com/get/g7ec37a0227210de5fd6351c9bb527fd24f099c0486f01e2b45cad9c5aac69f8d81ec6e6cc5fe5a5b3f509d5f0232798a_640.jpg",
          webformatWidth: 640,
          webformatHeight: 427,
          largeImageURL:
            "https://pixabay.com/get/gb8f99fe22a4583cc4294ee1437cd0244cf0270c2a4bf259b792d417e076c93e742219d4b595cbe1db5e7521bec18b526765f17049e0f06f4906108c99f47b2f8_1280.jpg",
          imageWidth: 5472,
          imageHeight: 3648,
          imageSize: 2420130,
          views: 3498,
          downloads: 2603,
          collections: 150,
          likes: 30,
          comments: 15,
          user_id: 16121886,
          user: "Grey85",
          userImageURL:
            "https://cdn.pixabay.com/user/2021/06/23/10-44-12-430_250x250.jpg",
          id_hash: "7079550",
          fullHDURL:
            "https://pixabay.com/get/g17c63c67f44c01f4c8178ab3db657cc44df9732edd8d3ba89b401cda3f5d0d8b69585d5427335130c499d3e4aec76fceb443bf238f9e9f315288ac6a022a5e7a_1920.jpg",
          imageURL:
            "https://pixabay.com/get/ga2bf4ea7d8992541b99deb09a300487bac9f839194075e94e32bf32e15453ce1c5e0bdddf9ddf4a1be3427555df40f46.jpg",
        },
        {
          id: 6574455,
          pageURL:
            "https://pixabay.com/photos/field-morning-sunrise-dawn-nature-6574455/",
          type: "photo",
          tags: "field, morning, sunrise",
          previewURL:
            "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_150.jpg",
          previewWidth: 150,
          previewHeight: 100,
          webformatURL:
            "https://pixabay.com/get/gee309e97410fa973c3bc055e973d7875f7842c6d73a36c86320d336ea9654c93612290d45d2940d70396408bb4017981_640.jpg",
          webformatWidth: 640,
          webformatHeight: 426,
          largeImageURL:
            "https://pixabay.com/get/gcb63120a165791e82bf3e7d35140b8d00972bdf897e5f2d8bb04783f7446465f14fb781128d22c3210702a025db623f6603ca712c80b6495d9f9bedf3349a36d_1280.jpg",
          imageWidth: 5967,
          imageHeight: 3972,
          imageSize: 4584508,
          views: 1404790,
          downloads: 1264153,
          collections: 20297,
          likes: 760,
          comments: 128,
          user_id: 22927133,
          user: "LagrangeHervé",
          userImageURL: "",
          id_hash: "6574455",
          fullHDURL:
            "https://pixabay.com/get/g18c580c1a29f2819e1672c58f938af6a23be3ef77a466f72dcaf167b046ad66fddfe786a234c38e01281ff69a79a7cc8bca426815a8328928d70620c3df760d5_1920.jpg",
          imageURL:
            "https://pixabay.com/get/gd823899ba23b77617949377efebd4ffe9b04a2ffeb1ebe7bba4e029738bf9c29ffbc50329e13606a4eff391248fe4050.jpg",
        },
        {
          id: 7043528,
          pageURL:
            "https://pixabay.com/vectors/ukraine-flag-peace-dove-war-7043528/",
          type: "vector/ai",
          tags: "ukraine, flag, peace",
          previewURL:
            "https://cdn.pixabay.com/photo/2022/03/02/16/29/ukraine-7043528_150.png",
          previewWidth: 150,
          previewHeight: 100,
          webformatURL:
            "https://pixabay.com/get/gcd821db3cdd44cf5e4361e6c4175c67d4e6c67f07ba485bd0b53b7e5c0beb092e11cac17ed11c0931be20f13a6390f9c_640.png",
          webformatWidth: 640,
          webformatHeight: 427,
          largeImageURL:
            "https://pixabay.com/get/g7e817860ded9c06f089b69d0c66e016605259e738bf052dc1b90e05124c8c1fcd82dd7a826d47d7f6d97ffe8889dc412fab6065bda2cd75f9c00434fb1a56e7d_1280.png",
          imageWidth: 1920,
          imageHeight: 1280,
          imageSize: 83571,
          views: 53793,
          downloads: 34952,
          collections: 1415,
          likes: 58,
          comments: 12,
          user_id: 72424,
          user: "bookdragon",
          userImageURL:
            "https://cdn.pixabay.com/user/2019/04/30/14-55-55-611_250x250.png",
          id_hash: "7043528",
          fullHDURL:
            "https://pixabay.com/get/g05c6e3a65d5569bbd03f66751e68d4dcbe2d08bf869b8dcbb424fc37c079cb566e8bd8b4cb16ee9fad842dbe3e419ee5c57415d96c450bca08649bc6286219e4_1920.png",
          imageURL:
            "https://pixabay.com/get/gadc239fef00a3e8c69d64e2e51af524eab67e84094582edfeadc798ac11984a65c6770bcca6bedb82e9c2b7d9e39ba33.png",
          vectorURL:
            "https://pixabay.com/get/ge03fdac7c9f7c8b2169a3352d1b87e43be966a51b1a7bccf4377839f5e9b57bbe17dde1eac55d5f03e588955440b9b6a.ai",
        },
        {
          id: 7042013,
          pageURL:
            "https://pixabay.com/photos/peace-genius-peace-angel-munich-7042013/",
          type: "photo",
          tags: "peace genius, peace angel, munich",
          previewURL:
            "https://cdn.pixabay.com/photo/2022/03/01/20/58/peace-genius-7042013_150.jpg",
          previewWidth: 150,
          previewHeight: 100,
          webformatURL:
            "https://pixabay.com/get/gfa96698036cb579b02eea904cf3944465c47968c721d2ee5e4079b33ddc7ada49f19760d020dc1b400125cb1ad43dd85_640.jpg",
          webformatWidth: 640,
          webformatHeight: 427,
          largeImageURL:
            "https://pixabay.com/get/g6d97a8d4faffc64e6b39cc164ef54a733dadf295b0708b17283824958e7e562c8e452051d6cf37817db6e91667dcc9527adef0e7d2fe94e9991eb6a7e2e6b6e0_1280.jpg",
          imageWidth: 6960,
          imageHeight: 4640,
          imageSize: 10421645,
          views: 69456,
          downloads: 50334,
          collections: 1258,
          likes: 62,
          comments: 16,
          user_id: 4691618,
          user: "planet_fox",
          userImageURL:
            "https://cdn.pixabay.com/user/2021/01/29/00-24-29-896_250x250.jpeg",
          id_hash: "7042013",
          fullHDURL:
            "https://pixabay.com/get/ga75640fb31863b1163512292d81cef28929d7b9f1595d6f588baaa8f00fbc1c947bd364bdd5be68a553702c3650a1039df133d8080847a283d90d4681f4bb8a1_1920.jpg",
          imageURL:
            "https://pixabay.com/get/g65fcac7d2db3f2eb28d18f7b46d55b936a34d951c2c0533a61e3db66a8979fc3e4726e16f7fedccf5ac2811966b102c2.jpg",
        },
        {
          id: 7025238,
          pageURL:
            "https://pixabay.com/photos/field-hills-barns-farmland-7025238/",
          type: "photo",
          tags: "field, hills, barns",
          previewURL:
            "https://cdn.pixabay.com/photo/2022/02/20/20/09/field-7025238_150.jpg",
          previewWidth: 150,
          previewHeight: 99,
          webformatURL:
            "https://pixabay.com/get/gb4df0e9b1dc0d5a0befb45a5050a88b5990479d76793eac78d72dd52022e9e87e311f7859a7c57da30492363b1d6c521_640.jpg",
          webformatWidth: 640,
          webformatHeight: 424,
          largeImageURL:
            "https://pixabay.com/get/g92dfc9f3cd9b04fa04c30e63c72d657b2199c66300b6a0bd042f981d057c4849bd8eb7b296d70bac0ba2e400c672ea37df1629d9c4c776a0417626be33026f3e_1280.jpg",
          imageWidth: 4928,
          imageHeight: 3264,
          imageSize: 3204796,
          views: 152418,
          downloads: 141974,
          collections: 1829,
          likes: 98,
          comments: 22,
          user_id: 25792484,
          user: "simon94",
          userImageURL:
            "https://cdn.pixabay.com/user/2022/02/25/22-13-53-592_250x250.jpg",
          id_hash: "7025238",
          fullHDURL:
            "https://pixabay.com/get/g750b2a40ea4f3f807a2418d9488485e123b0a09a1fcd51710e9ec61de6297780e48aeb18d714a777414847cbb8c344fc4849e49a5bcbd0fc085e928d1d7954df_1920.jpg",
          imageURL:
            "https://pixabay.com/get/ga4626bac6dc1ab8493779a77d2e1cd0d1a8a1292aca43b10fe57e1b325f51def1ac1ac57124143dbbf0df862ae2d1c4e.jpg",
        },
        {
          id: 6840369,
          pageURL:
            "https://pixabay.com/illustrations/happy-new-year-2022-greetings-6840369/",
          type: "illustration",
          tags: "happy new year, 2022, greetings",
          previewURL:
            "https://cdn.pixabay.com/photo/2021/12/02/12/17/happy-new-year-6840369_150.png",
          previewWidth: 150,
          previewHeight: 102,
          webformatURL:
            "https://pixabay.com/get/gbde1e0ab5831ac6aab8f83532632f0556166e6aa67af0210d62fb655cf7bf8924aab353bdb9ea605ad8f80c3ad308d6c_640.png",
          webformatWidth: 640,
          webformatHeight: 437,
          largeImageURL:
            "https://pixabay.com/get/gfce9e4bd16bc026f9265c6b8153e21d28f5acbf3064a7fe574075cb0d29c78f836f47fdc0c93219e670e322e61089c26fb114dbf361a62201474b1dc01161ddf_1280.png",
          imageWidth: 4713,
          imageHeight: 3219,
          imageSize: 1547644,
          views: 337216,
          downloads: 219233,
          collections: 7974,
          likes: 218,
          comments: 55,
          user_id: 1589018,
          user: "_Vane_",
          userImageURL:
            "https://cdn.pixabay.com/user/2020/09/21/13-26-24-543_250x250.jpg",
          id_hash: "6840369",
          fullHDURL:
            "https://pixabay.com/get/g47559aba3a6a6a6e9ea22c36fad8448de87f562632053413fc87300f72c5f1046db9638593c8698cc7a7c8fc44896ba6511e9f922c119028401ba70f42358708_1920.png",
          imageURL:
            "https://pixabay.com/get/g498ee72195e20dbe2aeefb0c6fde45cc47886e650b9f1338b0020fe555a54f0a2b88a096a91b80720e513f26fc51db9b.png",
        },
        {
          id: 7041215,
          pageURL:
            "https://pixabay.com/illustrations/flag-ukraine-nation-country-banner-7041215/",
          type: "illustration",
          tags: "flag, ukraine, nation",
          previewURL:
            "https://cdn.pixabay.com/photo/2022/03/01/12/39/flag-7041215_150.jpg",
          previewWidth: 150,
          previewHeight: 85,
          webformatURL:
            "https://pixabay.com/get/ga67e85a98f60efde35ed19db7a92252fcd2b5dc8fadf031a3e7a8bbdcc99361f5e6ffc8006636133100921f3ce0d1838_640.jpg",
          webformatWidth: 640,
          webformatHeight: 363,
          largeImageURL:
            "https://pixabay.com/get/g245e2a8f4075c41f14fb0afb5a7e2e250debf96bb61f683fefb200b20f2d5be78b4de18720276e8a1e82cfebdbf6848c6cd84aface484ae595651af223d78455_1280.jpg",
          imageWidth: 3000,
          imageHeight: 1700,
          imageSize: 402682,
          views: 30133,
          downloads: 22763,
          collections: 1118,
          likes: 30,
          comments: 12,
          user_id: 3428895,
          user: "bodkins18",
          userImageURL:
            "https://cdn.pixabay.com/user/2017/09/12/08-57-14-618_250x250.jpg",
          id_hash: "7041215",
          fullHDURL:
            "https://pixabay.com/get/gba8187da5dc31186d0f806aa9e3c23e6ce4dd5c2d7bf2fd04cb47a8bd222a3f1f04def77f1892c69572859b363aa3ae4872f9f9fa43ebb2d81b5336f04d56fe4_1920.jpg",
          imageURL:
            "https://pixabay.com/get/g6ae0fe87dda0f0c4cf6575f08b99d2eafee63f021110434e5e7c279d39f47697d793c16ad8441200002a3f9e6662eb97.jpg",
        },
        {
          id: 7036018,
          pageURL:
            "https://pixabay.com/photos/flag-ukraine-war-peace-soldier-7036018/",
          type: "photo",
          tags: "flag, ukraine, war",
          previewURL:
            "https://cdn.pixabay.com/photo/2022/02/26/16/48/flag-7036018_150.jpg",
          previewWidth: 150,
          previewHeight: 100,
          webformatURL:
            "https://pixabay.com/get/gd3723e6758aeb366ce600a19d431513502b5e9e8d155d230b24971947bf768d255cf654c69bb15c1a273d645c74fdabf_640.jpg",
          webformatWidth: 640,
          webformatHeight: 427,
          largeImageURL:
            "https://pixabay.com/get/g81a48f3d3246ccde8a7579327fb8997e37b4aff095d789adaef0c25762462035596c585508d71056f537d57d5cd01ec9289c08b2cf21ce243852120493cf8f1d_1280.jpg",
          imageWidth: 7087,
          imageHeight: 4724,
          imageSize: 7654502,
          views: 77420,
          downloads: 67112,
          collections: 1149,
          likes: 142,
          comments: 95,
          user_id: 3764790,
          user: "ELG21",
          userImageURL:
            "https://cdn.pixabay.com/user/2022/03/03/07-46-24-640_250x250.jpg",
          id_hash: "7036018",
          fullHDURL:
            "https://pixabay.com/get/g8748aea6be4ab7751062632ad87014f1792754939ca45a9bda9cff0e2549a1a2db328240db0d010728b8781056c7f4bc7891f7174981a2e95d4cd50809723b04_1920.jpg",
          imageURL:
            "https://pixabay.com/get/gb596fd0e3085c5112baef3adb40e724509f5f451f6b4bf19f905bd3b35909f65f9a02d56075336a7e43ced345c4db9e6.jpg",
        },
        {
          id: 7043225,
          pageURL:
            "https://pixabay.com/photos/peace-symbol-petals-ukraine-7043225/",
          type: "photo",
          tags: "peace, symbol, petals",
          previewURL:
            "https://cdn.pixabay.com/photo/2022/03/02/13/42/peace-7043225_150.jpg",
          previewWidth: 150,
          previewHeight: 113,
          webformatURL:
            "https://pixabay.com/get/gebc2ccf3e5012739a46b3e692a49377bae1c1e55203cebe31ef326566575e1ff101a6aa509ea12c4b0f19a4b29e4b1e1_640.jpg",
          webformatWidth: 640,
          webformatHeight: 480,
          largeImageURL:
            "https://pixabay.com/get/g6f7a88a5cd015f4ff70344eff4d4697f2decfa17d0fda9499579b396ef8e5640594d6037e13b018afc2a3f59f58d9a4d1af38313c42aad541416b88a707a1f70_1280.jpg",
          imageWidth: 10000,
          imageHeight: 7500,
          imageSize: 23699588,
          views: 65197,
          downloads: 52897,
          collections: 926,
          likes: 91,
          comments: 33,
          user_id: 3656355,
          user: "Engin_Akyurt",
          userImageURL:
            "https://cdn.pixabay.com/user/2018/09/20/08-02-23-312_250x250.jpg",
          id_hash: "7043225",
          fullHDURL:
            "https://pixabay.com/get/g8d15c373271c224b31c8a50c23d6877430d65a39ca8e84d980c64edacceb036f1fe33725d557184ff2ed39c4a9a4d84ff71b7f0045d103c8a3f06c8aa2d2c9cc_1920.jpg",
          imageURL:
            "https://pixabay.com/get/g96f670d8a9eb9d6fef2260cf136cbd77906c6f29139582f8ed90c161426a043a0c6c39bc26a83e270abc7add92a1a621.jpg",
        },
        {
          id: 6966721,
          pageURL:
            "https://pixabay.com/photos/sky-clouds-nature-outdoors-cumulus-6966721/",
          type: "photo",
          tags: "sky, clouds, nature",
          previewURL:
            "https://cdn.pixabay.com/photo/2022/01/25/16/01/sky-6966721_150.jpg",
          previewWidth: 150,
          previewHeight: 100,
          webformatURL:
            "https://pixabay.com/get/gf1f8c33d12b582f853b34ac3de64711be7561e512cdfb3bad12133f01ab09d1fd3cd139ff7dc0ba108a0f00fdd7805d2_640.jpg",
          webformatWidth: 640,
          webformatHeight: 427,
          largeImageURL:
            "https://pixabay.com/get/g13475c2bbed383dce20211c40ab3256d9dfc9a80a41ca479b15cf981bb9189d2e32b75284eb83355a26753a75ab60a63b2f41b2e6b6da61da6b0b5bbcbffcac6_1280.jpg",
          imageWidth: 6000,
          imageHeight: 4000,
          imageSize: 6528875,
          views: 337892,
          downloads: 318252,
          collections: 3221,
          likes: 183,
          comments: 42,
          user_id: 25407976,
          user: "Nathtravelandphoto",
          userImageURL:
            "https://cdn.pixabay.com/user/2022/01/25/15-28-12-632_250x250.jpg",
          id_hash: "6966721",
          fullHDURL:
            "https://pixabay.com/get/g64420eb53f349bfe948142bf9ce47239a48199487d341cf146e868c752f62f332c546cc579a39eb58637e788b82f9bb30a6e71f5171353457627bdb262fc48c0_1920.jpg",
          imageURL:
            "https://pixabay.com/get/g86b41482dcef66d473077bd43674d3c446aa43f44e712ca72424190cdb308bc674ceaeeab9311b4db0d29cf08b56be3c.jpg",
        },
        {
          id: 6835828,
          pageURL:
            "https://pixabay.com/photos/tree-snow-winter-christmas-branch-6835828/",
          type: "photo",
          tags: "tree, snow, winter",
          previewURL:
            "https://cdn.pixabay.com/photo/2021/11/30/17/06/tree-6835828_150.jpg",
          previewWidth: 150,
          previewHeight: 100,
          webformatURL:
            "https://pixabay.com/get/g3bca45cb88afa5bb12a0036164f58b8918e65f8b3ebf0beaaff5dd192428609489c54a35c16cd5d299a94bace9c59072_640.jpg",
          webformatWidth: 640,
          webformatHeight: 427,
          largeImageURL:
            "https://pixabay.com/get/g16e2f26dd5193faf77413162e0d01aeac0d616aaf682d021c97a25b1d827f1d43518bcef51e50b27afa040f3badd524481a584f61a29a245097784ed57374993_1280.jpg",
          imageWidth: 5760,
          imageHeight: 3840,
          imageSize: 2899210,
          views: 705713,
          downloads: 643613,
          collections: 6695,
          likes: 293,
          comments: 56,
          user_id: 334088,
          user: "JillWellington",
          userImageURL:
            "https://cdn.pixabay.com/user/2018/06/27/01-23-02-27_250x250.jpg",
          id_hash: "6835828",
          fullHDURL:
            "https://pixabay.com/get/g25be9653cbbad215f5d620ba6069409bbeb19840c4363324d40dab5c2a0447424db7ce98634814afcb8fd49a30797be0211e53f49c26660f2568be2780ff0c63_1920.jpg",
          imageURL:
            "https://pixabay.com/get/g69ec20b2eb4cbb21eaad15a4ccfee70690e349ca6ed484e21b670c49a4d8ae4cd745944400aaffd630bdaddd87300e7d.jpg",
        },
        {
          id: 7068221,
          pageURL:
            "https://pixabay.com/photos/ukraine-flag-little-boy-destruction-7068221/",
          type: "photo",
          tags: "ukraine, flag, little boy",
          previewURL:
            "https://cdn.pixabay.com/photo/2022/03/14/13/38/ukraine-7068221_150.jpg",
          previewWidth: 150,
          previewHeight: 100,
          webformatURL:
            "https://pixabay.com/get/gb391d43e7010719d720d69ab0c2f1cf3cbe3562307302d3eeb86884d62b52d0ca975ae275eb80de61bcd4b0a92db0fc6_640.jpg",
          webformatWidth: 640,
          webformatHeight: 427,
          largeImageURL:
            "https://pixabay.com/get/g1111621b3b1486606cc0c309eb6b432fc2d36bee6b95d76555e16b8feddf1ec9983268fa69323e3aeb6ac170846f7f1104e22264a7bb343fc7ec465ef4fad652_1280.jpg",
          imageWidth: 7087,
          imageHeight: 4724,
          imageSize: 5354455,
          views: 17835,
          downloads: 16470,
          collections: 188,
          likes: 81,
          comments: 72,
          user_id: 3764790,
          user: "ELG21",
          userImageURL:
            "https://cdn.pixabay.com/user/2022/03/03/07-46-24-640_250x250.jpg",
          id_hash: "7068221",
          fullHDURL:
            "https://pixabay.com/get/g5fe8450122828b537e6eb8a2e20e8f999017e13f580a8a3a8cef7fcfb71fe6598720e3078eb9c88769d2bee092dd99f16a0b955f6ccb5d97c0b134aa71f50b57_1920.jpg",
          imageURL:
            "https://pixabay.com/get/g3fb7ec5adb7813080eab0e9e18adb0bd5ada23c7e74b349e7f9b0d3cf895bc2f740b909128ea46dcbe06b967a49c80e8.jpg",
        },
        {
          id: 7047830,
          pageURL:
            "https://pixabay.com/photos/ukraine-flag-sky-dove-bird-clouds-7047830/",
          type: "photo",
          tags: "ukraine, flag, sky",
          previewURL:
            "https://cdn.pixabay.com/photo/2022/03/04/18/01/ukraine-7047830_150.jpg",
          previewWidth: 150,
          previewHeight: 86,
          webformatURL:
            "https://pixabay.com/get/g63253413f40a93895b82a305aadcaa03246c232b9e645122019b6ba427d702e735e7736fc9cd75ebfbedaeacca46ca7a_640.jpg",
          webformatWidth: 640,
          webformatHeight: 365,
          largeImageURL:
            "https://pixabay.com/get/g984e214c6e6e0971a47c99ef023ebc934c46d24b12ddb98acd4c5ac0ff94c5233b5741b50a0e8348356d0a3797ed5f1dca05a7e16835b83b285b9fdde93d5c36_1280.jpg",
          imageWidth: 6090,
          imageHeight: 3477,
          imageSize: 2320669,
          views: 54550,
          downloads: 50338,
          collections: 699,
          likes: 113,
          comments: 73,
          user_id: 3764790,
          user: "ELG21",
          userImageURL:
            "https://cdn.pixabay.com/user/2022/03/03/07-46-24-640_250x250.jpg",
          id_hash: "7047830",
          fullHDURL:
            "https://pixabay.com/get/g6fbe992e4fc52396f986e1b85202774feaea05e542d363f5d05b2b23aed34948e848f4efe7f388f56e9efaf379fff5ae4ec8e71130ab95ca36a9d14f6f81c97a_1920.jpg",
          imageURL:
            "https://pixabay.com/get/ga87713e4c52d7e1779315801299869379fd894c0a532ed68fbcdfb0fd8356bea1fb4470a1c062143eac8a8d3b15c61f2.jpg",
        },
        {
          id: 7031868,
          pageURL:
            "https://pixabay.com/illustrations/banner-ukraine-flag-war-politics-7031868/",
          type: "illustration",
          tags: "banner, ukraine, flag",
          previewURL:
            "https://cdn.pixabay.com/photo/2022/02/24/06/46/banner-7031868_150.jpg",
          previewWidth: 150,
          previewHeight: 100,
          webformatURL:
            "https://pixabay.com/get/g10a8bf64bd8b04c69b7c3c0ed2932cec51c97e7ebd0574ab534496d1f93ce47c2c0ae3fe9b4072120e9489ff9d530bf6_640.jpg",
          webformatWidth: 640,
          webformatHeight: 427,
          largeImageURL:
            "https://pixabay.com/get/gc92ff224e17cb446568aecadf2d34211d48828b8828b5f39564d6cc829599dc73783fd9db2b7329f794f71ac8c9622f1f477bf2f4f551ab6aecd790bc3d3c89f_1280.jpg",
          imageWidth: 3776,
          imageHeight: 2520,
          imageSize: 1634422,
          views: 48197,
          downloads: 31196,
          collections: 1145,
          likes: 118,
          comments: 61,
          user_id: 9301,
          user: "geralt",
          userImageURL:
            "https://cdn.pixabay.com/user/2022/03/04/06-41-05-178_250x250.jpg",
          id_hash: "7031868",
          fullHDURL:
            "https://pixabay.com/get/g3246a2d63da76aa6181fe71d5c42090775fc74b1ef608108540d0675c04cc3b73ab0a8c6855dff24b55958c1560508f1957b05031b9f6addb04d252aa2b8da93_1920.jpg",
          imageURL:
            "https://pixabay.com/get/g315add2fe1fae9092833df28c5ac4ad7d83fda73eaee939679e8434a0653e567e0686c48b5831013b049d1371de5ce67.jpg",
        },
        {
          id: 7035403,
          pageURL:
            "https://pixabay.com/illustrations/people-faces-lines-support-partner-7035403/",
          type: "illustration",
          tags: "people, faces, lines",
          previewURL:
            "https://cdn.pixabay.com/photo/2022/02/26/08/23/people-7035403_150.jpg",
          previewWidth: 150,
          previewHeight: 150,
          webformatURL:
            "https://pixabay.com/get/geaee2828b5b3472bd5cf068a4e8e1496a9b4ccd53ee0e51604f0d70216fd1935ca8f913ce30641648708e965da245cbe_640.jpg",
          webformatWidth: 640,
          webformatHeight: 640,
          largeImageURL:
            "https://pixabay.com/get/gf30e7be01da806f5be052da882a2b397e83a3d3bf51219ec34a1ac066a2e96a1b9d58b22abeba18bb0ae65d3112139a02b883cfadc2793775b2049da3993a355_1280.jpg",
          imageWidth: 5000,
          imageHeight: 5000,
          imageSize: 300561,
          views: 30370,
          downloads: 21353,
          collections: 1021,
          likes: 96,
          comments: 25,
          user_id: 9606149,
          user: "BiancaVanDijk",
          userImageURL:
            "https://cdn.pixabay.com/user/2021/12/09/19-30-59-35_250x250.jpg",
          id_hash: "7035403",
          fullHDURL:
            "https://pixabay.com/get/g11e2f0ef5dc15b0a21eee5ca547eb47b1b11d8075390aa03b32db2d4ea8fd81ddc352663535d934004ba69e23b2562ae4a26d7a363ab7caa1498a71d4d09e1d8_1920.jpg",
          imageURL:
            "https://pixabay.com/get/g52aa49953dcae87739024b0826d416b081482db4741938dc316d905d8d411b45ea0f33fab085af39040ee12cf296dbd5.jpg",
        },
      ],
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(fetchData()).resolves.toEqual(data);
  });

  it("fetches erroneously data from an API", async () => {
    const errorMessage = "Network Error";

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );

    await expect(fetchData()).rejects.toThrow(errorMessage);
  });
});

describe("renders correct HTML elements", () => {
  let app;
  let div1;
  let div2;
  let div3;
  let img;
  beforeEach(() => {
    app = mount(<App />);
    div1 = app.find(".images-div").hostNodes();
    div2 = app.find(".row").hostNodes();
    div3 = app.find(".col").hostNodes();
    img = app.find(".image").hostNodes();
  });

  it("Renders with a className equal to the variant", () => {
    const { container } = render(<App />);
    expect(container.classList.contains("images-div")).toBe(true);
  });

  it('should have an "images-div" div', () => {
    expect(div1.exists()).toBe(true);
    expect(div1).toHaveLength(1);
  });

  it('should have "image-rows" divs', () => {
    expect(div2.exists()).toBe(true);
    expect(div2).toBeGreaterThan(1);
  });

  it('should have "image-container" divs', () => {
    expect(div3.exists()).toBe(true);
    expect(div3).toBeGreaterThan(1);
  });

  it('should have "image" images', () => {
    expect(img.exists()).toBe(true);
    expect(img).toBeGreaterThan(1);
  });
});
