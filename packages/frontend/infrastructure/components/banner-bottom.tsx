import Image from 'next/image';

export default function BannerBottom() {
  return (
    <aside className="banner banner-bottom" aria-label="Submit a new celebrity">
      <Image
        layout="fill"
        className="banner__background"
        src="/img/bg-people.png"
        alt="People background"
      />
      <div className="banner__left">
        <h2 className="banner__heading">
          Is there anyone else you would want us to add?
        </h2>
      </div>
      <div className="banner__right">
        <button className="banner__cta" type="button">
          Submit a name
        </button>
      </div>
    </aside>
  );
}
