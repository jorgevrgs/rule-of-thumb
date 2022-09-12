import Image from 'next/image';

export default function BannerBottom() {
  return (
    <aside className="banner banner-bottom" role="complementary">
      <Image
        layout="fill"
        className="banner__background"
        src="/img/bg-people.png"
        alt=""
        role="none"
      />
      <div className="banner__left">
        <h2 className="banner__heading">
          Is there anyone else you would want us to add?
        </h2>
      </div>
      <div className="banner__right">
        <button className="banner__cta" role="button">
          Submit a name
        </button>
      </div>
    </aside>
  );
}
