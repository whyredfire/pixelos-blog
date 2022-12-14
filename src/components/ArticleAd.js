import React from 'react';

export default function ArticleAd() {
  return (
    <div className="Adsense">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8622741211890473"
     crossorigin="anonymous"></script>
    <ins
    className="adsbygoogle"
    style={{ display: "block", textAlign: "center" }}
    data-ad-layout="in-article"
    data-ad-format="fluid"
    data-ad-client="ca-pub-8622741211890473"
    data-ad-slot={3686160267}
    />
    <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
    </div>
  );
}
