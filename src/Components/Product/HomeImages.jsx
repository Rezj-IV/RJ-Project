import React from "react";
import * as repository from "../../../RestConfig/RestRequest";
import Image from "next/image";
import styles from "./HomeImages.module.scss";
import Link from "next/link";
import { BsPatchCheck } from "react-icons/bs";
async function getAllHomeImages() {
  const response = await repository.Get("HomeImages ");
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log("دیتا به درستی از سرور دریافت نشد");
  }
}

export const HomeImagesFirstSection = async () => {
  const image = await getAllHomeImages();
  let result = image.filter((item) => {
    return item.id === 1;
  });

  console.log(result);
  return (
    <div>
      <Link href="/">
        <div className={styles.FirstSectionContainer}>
          <Image
            className={styles.homeImage}
            fill
            alt={result[0].name}
            src={result[0].indexImageUrl}
          />
        </div>
      </Link>
    </div>
  );
};

export const HomeImagesSecondSection = async () => {
  const image = await getAllHomeImages();
  let result = image.filter((item) => {
    return item.bestMobile === true;
  });

  return (
    <div>
      <h3 className={styles.bestMobile}>برترین‌های موبایل</h3>

      <div className={styles.SecondSectionContainer}>
        {result.map((item) => {
          return (
            <div>
              <Image
                className={styles.SecondHomeImage}
                width={180}
                height={180}
                alt={item.name}
                src={item.indexImageUrl}
              />
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const HomeImagesThirdSection = async () => {
  const image = await getAllHomeImages();
  let result = image.filter((item) => {
    return item.id === 21;
  });

  console.log(result);
  return (
    <div>
      <div className={styles.FirstSectionContainer}>
        <Image
          className={styles.homeImage}
          fill
          alt={result[0].name}
          src={result[0].indexImageUrl}
        />
      </div>
    </div>
  );
};
export const HomeImagesFourthSection = async () => {
  const image = await getAllHomeImages();
  let result = image.filter((item) => {
    return item.bestLaptop === true;
  });

  return (
    <div>
      <h3 className={styles.bestMobile}>برترین‌های لپ‌تاپ</h3>

      <div className={styles.SecondSectionContainer}>
        {result.map((item) => {
          return (
            <div>
              <Image
                className={styles.SecondHomeImage}
                width={180}
                height={180}
                alt={item.name}
                src={item.indexImageUrl}
              />
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const HomeImagesFifthSection = async () => {
  const image = await getAllHomeImages();

  let result = image.filter((item) => {
    return item.id === 2 || item.id === 3;
  });

  return (
    <div>
      <div className={styles.FifthSectionContainer}>
        {result.map((item) => {
          return (
            <div className={styles.FifthSection}>
              <Image
                className={styles.FifthHomeImage}
                fill
                alt={item.name}
                src={item.indexImageUrl}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const HomeImagesSixthSection = async () => {
  const image = await getAllHomeImages();
  let result = image.filter((item) => {
    return item.bestHandFree === true;
  });

  return (
    <div>
      <h3 className={styles.bestMobile}>برترین‌های هندزفری</h3>

      <div className={styles.SecondSectionContainer}>
        {result.map((item) => {
          return (
            <div>
              <Image
                className={styles.SecondHomeImage}
                width={180}
                height={180}
                alt={item.name}
                src={item.indexImageUrl}
              />
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const HomeImagesSeventhSection = async () => {
  const image = await getAllHomeImages();

  let result = image.filter((item) => {
    return item.id === 4 || item.id === 5;
  });

  return (
    <div>
      <div className={styles.FifthSectionContainer}>
        {result.map((item) => {
          return (
            <div className={styles.FifthSection}>
              <Image
                className={styles.FifthHomeImage}
                fill
                alt={item.name}
                src={item.indexImageUrl}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const HomeImagesEighthSection = async () => {
  const image = await getAllHomeImages();

  let result = image.filter((item) => {
    return item.selectedBrands === true;
  });
  console.log(result);

  return (
    <div className={styles.EighthSectionContainer}>
      <div className={styles.selectedBrandsContainer}>
        <div className={styles.selectedBrands}>
          <BsPatchCheck className={styles.Check} />
          <h3>برندهای منتخب</h3>
        </div>
        {result.map((item) => {
          return (
            <Link href={`brand/${item.name}`}>
              <div className={styles.EighthSection}>
                <Image
                  width={130}
                  height={100}
                  alt={item.name}
                  src={item.indexImageUrl}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export const HomeImagesNinthSection = async () => {
  const image = await getAllHomeImages();

  let result = image.filter((item) => {
    return item.digital === true;
  });

  return (
    <div className={styles.mainContainerNinthSection}>
      <h3 className={styles.title}>کالا های دیجیتال </h3>

      <div className={styles.DigitalContainer}>
        {result.map((item) => {
          return (
            <div>
              {item.id === 24 || item.id === 25 || item.id === 26 || item.id === 27 ||item.id === 28?  (
                <Link href={`/Product/Class/${item.linkName}`}>
                  <div className={styles.Digital}>
                    <Image
                      width={120}
                      height={120}
                      alt={item.name}
                      src={`/Digital/${item.indexImageUrl}`}
                    />

                    <div className={styles.textDigital}>
                      <span>{item.name}</span>
                    </div>
                  </div>
                </Link>
              ) : 
              <Link href={`/brand/${item.linkName}`}>
              <div className={styles.Digital}>
                <Image
                  width={120}
                  height={120}
                  alt={item.name}
                  src={`/Digital/${item.indexImageUrl}`}
                />

                <div className={styles.textDigital}>
                  <span>{item.name}</span>
                </div>
              </div>
            </Link>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const HomeImagesTenthSection = async () => {
  const image = await getAllHomeImages();

  let result = image.filter((item) => {
    return item.id === 22 || item.id === 23;
  });

  return (
    <div>
      <div className={styles.FifthSectionContainer}>
        {result.map((item) => {
          return (
            <div className={styles.FifthSection}>
              <Image
                className={styles.FifthHomeImage}
                fill
                alt={item.name}
                src={item.indexImageUrl}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};


export const HomeImagesEleventhSection = async () => {
  const image = await getAllHomeImages();

  let result = image.filter((item) => {
    return item.linkName === "weblog" ;
  });
  console.log(result);

  return (
    <div className={styles.MainEleventhSectionContainer}>
      <div className={styles.EleventhSectionContainer}>
        {result.map((item) => {
          return (
            <div className={styles.EleventhSection}>
              <Image
                className={styles.EleventhHomeImage}
                fill
                alt={item.name}
                src={item.indexImageUrl}
              />
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};