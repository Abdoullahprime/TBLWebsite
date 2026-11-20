"use client";
import { useEffect, useRef } from "react";

const moments = [
  "bground.jpeg","awar4.jpg","award_mmd.jpg","award.jpg","award2.jpg","award-3.jpg",
  "award-dmd.jpg","award-md1.jpg","awar-football.jpg","awar-md.jpg",
  "IMG-20250304-WA0112.jpg","download.jpg","mili1.jpg","mili2.jpg","mili3.jpg","mili4.jpg",
  "sos.jpg","sos1.jpg","sos4.jpg","gra.jpg","gra1.jpg","gra2.jpg","gra4.jpg",
  "IMG-20250623-WA0035.jpg","image0.jpeg","image1.jpeg","image2.jpeg","image3.jpeg",
  "image4.jpeg","image5.jpeg","image6.jpeg","image7.jpeg","image8.jpeg","image9.jpeg",
  "image10.jpeg","image11.jpeg","image12.jpeg","image13.jpeg",
  "image0_1.jpeg","image1_1.jpeg","image2_1.jpeg","image3_1.jpeg",
  "AM11_1.jpeg","AM11_2.jpeg","AM11_3.jpeg","AM11_4.jpeg",
  "AM11_5.jpeg","AM11_6.jpeg","AM11_7.jpeg","AM11_8.jpeg",
  "PHOTO-2025-09-20-14-22-07.jpg","PHOTO-2025-09-20-14-22-08_1.jpg","PHOTO-2025-09-20-14-22-08_2.jpg",
  "PHOTO-2025-09-20-14-22-08_3.jpg","PHOTO-2025-09-20-14-22-08_4.jpg",
  "PHOTO-2025-09-20-14-22-08.jpg","PHOTO-2025-09-20-14-22-09.jpg",
  "download_1.jpg","download_2.jpg","download_3.jpg","download_4.jpg","download_10.jpg",
  "G.jpeg","GROUP.jpeg","TRUST.jpeg","GROUP.jpg","PHOTO-2025-11-30-19-34-231.jpg","group.jpg",
  "PHOTO-2025-11-30-19-34-20.jpg","PHOTO-2025-11-30-19-34-202.jpg",
  "PHOTO-2025-11-30-19-34-21.jpg","PHOTO-2025-11-30-19-34-22.jpg","PHOTO-2025-11-30-19-34-23.jpg",
  "PHOTO-2025-11-29-09-24-45.jpg","PHOTO-2025-11-29-09-24-451.jpg","PHOTO-2025-11-29-09-24-452.jpg",
  "PHOTO-2025-11-29-09-24-461.jpg","PHOTO-2025-11-29-09-24-462.jpg","PHOTO-2025-11-29-09-24-463.jpg",
  "bundung_1.jpg","bun.jpg","bundung_88.jpg","bundung_99.jpg","bundung_0.jpg",
  "bundung_6.jpg","bundung_8.jpg","bundung_b.jpg","bundung_c.jpg",
  "bundung_gif.jpg","bundung_group.jpg","bundung_hn.jpg","bundung_n.jpg","bunj.jpg","bunn.jpg",
  "aunty_fa.jpg","tanka_4.jpg","tanka_23.jpg","tanka_66..jpg","tanka_88.jpg","tanka_555.jpg",
  "tanka_gift.jpg","tanka_head.jpg","tanka_nurs.jpg","tanka.jpg","tanka_fift_2.jpg","tanka_gift_3.jpg",
  "PHOTO-2025-12-09-12-37-444.jpg","PHOTO-2025-12-09-12-37-452.jpg","PHOTO-2025-12-09-12-37-453.jpg","PHOTO-2025-12-09-12-37-455.jpg",
  "PHOTO-2025-12-09-12-38-25.jpg","PHOTO-2025-12-09-12-38-252.jpg","PHOTO-2025-12-09-12-38-254.jpg",
  "PHOTO-2025-12-09-12-38-26.jpg","PHOTO-2025-12-09-12-38-261.jpg","PHOTO-2025-12-09-12-38-262.jpg","PHOTO-2025-12-09-12-38-263.jpg",
  "PHOTO-2025-12-09-15-41-54.jpg","PHOTO-2025-12-09-15-41-55.jpg","PHOTO-2025-12-09-15-41-551.jpg",
  "PHOTO-2025-12-09-15-41-56.jpg","PHOTO-2025-12-09-15-41-561.jpg","PHOTO-2025-12-09-15-41-562.jpg",
  "PHOTO-2025-12-09-15-41-57.jpg","PHOTO-2025-12-09-15-41-58.jpg","PHOTO-2025-12-09-15-41-591.jpg",
  "PHOTO-2025-12-09-15-42-00.jpg","PHOTO-2025-12-09-15-42-001.jpg",
  "g1.jpeg","g.jpeg","G.jpg",
  "IMG_7239.jpeg","IMG_7240.jpeg","IMG_7241.jpeg","IMG_7243.jpeg","IMG_7244.jpeg","IMG_7245.jpeg","IMG_7247.jpeg","IMG_7249.jpeg","IMG_7250.jpeg","IMG_7251.jpeg",
  "IMG_7253.jpeg","IMG_7254.jpeg","IMG_7255.jpeg","IMG_7256.jpeg","IMG_7257.jpeg","IMG_7258.jpeg","IMG_7259.jpeg","IMG_7260.jpeg","IMG_7261.jpeg",
  "IMG_7300.jpeg","IMG_7301.jpeg","IMG_7302.jpeg","IMG_7303.jpeg","IMG_7304.jpeg","IMG_7305.jpeg","IMG_7306.jpeg","IMG_7307.jpeg","IMG_7308.jpeg",
  "IMMM.jpeg","IMG_7310.jpeg","IMG_7311.jpeg","IMG_7312.jpeg","IMG_7313.jpeg","IMG_7314.jpeg","IMG_7315.jpeg",
  "IMG_7316.jpeg","IMG_7317.jpeg","IMG_7318.jpeg","IMG_7320.jpeg","IMG_7321.jpeg","IMG_7322.jpeg","IMG_7323.jpeg",
  "SOMA.jpeg","BANSAG.jpeg",
  "IMG_7325.jpeg","IMG_7326.jpeg","IMG_7327.jpeg","IMG_7328.jpeg","IMG_7329.jpeg","IMG_7330.jpeg","IMG_7331.jpeg","IMG_7332.jpeg","IMG_7333.jpeg","IMG_7334.jpeg",
  "IMG_7852.jpeg","IMG_7853.jpeg","IMG_7854.jpeg","IMG_7855.jpeg","IMG_7856.jpeg","IMG_7857.jpeg","IMG_7858.jpeg","IMG_7859.jpeg","IMG_7860.jpeg","IMG_7861.jpeg",
  "bore.jpg","gddddd.jpg","ddddddddddddddd.jpg",
  "PHOTO-2026-01-23-11-49-17.jpg","PHOTO-2026-01-23-11-49-172.jpg","awa.jpeg",
  "PHOTO-2026-01-23-11-49-181.jpg","PHOTO-2026-01-23-11-49-182.jpg",
  "PHOTO-2026-01-23-11-49-19.jpg","PHOTO-2026-01-23-11-49-191.jpg","PHOTO-2026-01-23-11-49-192.jpg",
  "ddd3e50d-5a43-4273-9aa7-aaa6274340f9.jpeg","2edede5d-1cbe-4f93-9390-556c5e7215d9.jpeg",
  "6c3ef637-f95e-4629-9cd6-c322aff9215a.jpeg","7aaf3f78-3b60-4c8b-8204-9e03d3cc4fae.jpeg",
  "66e2efdf-cbea-46f8-9d5b-a8dbe15afa40.jpeg","76cdccc0-f20f-4547-8f32-69187ab882d7.jpeg",
  "071175c7-3879-4185-8a8d-eda56f8cab8d.jpeg","aa2e35da-3785-4f5c-845a-dcc0c3958c9d.jpeg",
  "PHOTO-2026-02-18-12-32-01.jpg","PHOTO-2026-02-18-12-32-011.jpg","PHOTO-2026-02-18-12-32-02.jpg","PHOTO-2026-02-18-12-32-021.jpg",
  "PHOTO-2026-02-18-12-32-03.jpg","PHOTO-2026-02-18-12-32-04.jpg","PHOTO-2026-02-18-12-32-041.jpg","PHOTO-2026-02-18-12-32-042.jpg",
  "PHOTO-2026-02-18-12-32-05.jpg","PHOTO-2026-02-18-12-32-051.jpg","MOU.jpg",
  "PHOTO-2026-04-15-12-07-54.jpg","PHOTO-2026-04-15-12-07-541.jpg","PHOTO-2026-04-15-12-07-542.jpg",
  "PHOTO-2026-04-15-12-07-55.jpg","PHOTO-2026-04-15-12-07-551.jpg","PHOTO-2026-04-15-12-07-552.jpg","PHOTO-2026-04-15-12-07-553.jpg",
  "PHOTO-2026-04-15-12-07-554.jpg","PHOTO-2026-04-15-12-07-555.jpg","PHOTO-2026-04-15-12-07-556.jpg","PHOTO-2026-04-15-12-07-557.jpg",
  "PHOTO-2026-04-15-12-07-56.jpg","PHOTO-2026-04-15-12-07-562.jpg","PHOTO-2026-04-15-12-07-563.jpg",
  "PHOTO-2026-04-16-16-41-23.jpg","PHOTO-2026-04-16-16-41-231.jpg","PHOTO-2026-04-16-16-41-24.jpg","PHOTO-2026-04-16-16-41-241.jpg",
  "PHOTO-2026-04-16-16-41-242.jpg","PHOTO-2026-04-16-16-41-243.jpg","PHOTO-2026-04-16-16-41-245.jpg",
  "PHOTO-2026-04-16-16-41-25.jpg","PHOTO-2026-04-16-16-41-251.jpg","PHOTO-2026-04-16-16-41-252.jpg","PHOTO-2026-04-16-16-41-253.jpg",
  "medals.jpg",
  "PHOTO-2026-04-20-10-08-47.jpg","PHOTO-2026-04-20-10-08-471.jpg","PHOTO-2026-04-20-10-08-472.jpg",
  "PHOTO-2026-04-20-10-08-48.jpg","PHOTO-2026-04-20-10-08-481.jpg","PHOTO-2026-04-20-10-08-482.jpg","PHOTO-2026-04-20-10-08-483.jpg","PHOTO-2026-04-20-10-08-484.jpg",
  "PHOTO-2026-04-20-10-08-485.jpg","PHOTO-2026-04-20-10-08-486.jpg","PHOTO-2026-04-20-10-08-487.jpg","PHOTO-2026-04-20-10-08-488.jpg",
  "PHOTO-2026-04-20-10-08-49.jpg","PHOTO-2026-04-20-10-08-491.jpg","PHOTO-2026-04-20-10-08-492.jpg","PHOTO-2026-04-20-10-08-493.jpg",
  "PHOTO-2026-04-20-10-08-494.jpg","PHOTO-2026-04-20-10-08-495.jpg","PHOTO-2026-04-20-10-08-496.jpg","PHOTO-2026-04-20-10-08-497.jpg","PHOTO-2026-04-20-10-08-498.jpg",
  "PHOTO-2026-04-20-10-08-501.jpg","PHOTO-2026-04-20-10-08-502.jpg","PHOTO-2026-04-20-10-08-503.jpg","PHOTO-2026-04-20-10-08-504.jpg",
  "PHOTO-2026-04-20-10-08-505.jpg","PHOTO-2026-04-20-10-08-506.jpg","PHOTO-2026-04-20-10-08-508.jpg",
  "PHOTO-2026-05-13-13-13-551.jpg","PHOTO-2026-05-13-13-13-56.jpg","PHOTO-2026-05-13-13-13-561.jpg",
  "PHOTO-2026-05-13-13-13-57.jpg","PHOTO-2026-05-13-13-13-571.jpg","PHOTO-2026-05-13-13-13-58.jpg",
  "PHOTO-2026-05-13-13-13-581.jpg","PHOTO-2026-05-13-13-13-582.jpg","PHOTO-2026-05-13-13-13-59.jpg","PHOTO-2026-05-13-13-13-591.jpg","PHOTO-2026-05-13-13-14-00.jpg",
  "students.jpg",
  "PHOTO-2026-06-04-15-34-241.jpg","PHOTO-2026-06-04-15-34-242.jpg","PHOTO-2026-06-04-15-34-243.jpg","PHOTO-2026-06-04-15-34-244.jpg","PHOTO-2026-06-04-15-34-245.jpg",
  "PHOTO-2026-06-04-15-34-25.jpg","PHOTO-2026-06-04-15-34-251.jpg","PHOTO-2026-06-04-15-34-252.jpg","PHOTO-2026-06-04-15-34-253.jpg","PHOTO-2026-06-04-15-34-254.jpg",
  "PHOTO-2026-06-04-15-34-255.jpg","PHOTO-2026-06-04-15-34-26.jpg","PHOTO-2026-06-04-15-34-261.jpg","thst.jpg",
  "pro-jzjAUnoy.jpeg","pro-rvvWqO2Q.jpeg","pro-UEdpXtwJ.jpeg",
  "952885cc-c181-4f0f-8e6b-9110e534b5f8.jpg",
  "1a81147d-6805-44d3-a4e7-1bcaa25e69ee.jpeg","69e5de16-8838-40d4-a828-11e8f5431157.jpeg",
  "3585e942-d005-4a56-b315-46b9d8bba318.jpeg","f69b5706-3f92-456d-b837-cf816b36c309.jpeg",
  "8548e383-c720-4d10-83d0-0391aa99d338.jpeg","4ed7d2fd-6f97-4d9b-9526-c7f8309f609c.jpeg",
  "45f70078-8196-4e60-b885-4d3f025c437a.jpeg","eb5915eb-6e3b-4cde-a638-9b912a1610f4_1.jpeg",
  "da4256ee-15c3-4105-8000-6378a93d2fa2.jpeg","9939e9d2-5577-44c2-a4a6-41b242c958be.jpeg",
  "40fbe8b3-c8cd-423f-b4e4-4989806a0b88.jpeg","5fc477ab-f87d-4c06-a968-0074c5a9f776.jpeg",
  "IMG-20261109-WA0002.jpg","IMG-20261109-WA0003.jpg",
];

export default function MomentsSlideshow() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const el = track;
    let frame: number;
    let pos = 0;
    const speed = 0.5; // px per frame

    function tick() {
      pos += speed;
      const half = el.scrollWidth / 2;
      if (pos >= half) pos -= half;
      el.style.transform = `translateX(-${pos}px)`;
      frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  // Duplicate for seamless loop
  const all = [...moments, ...moments];

  return (
    <section className="bg-[#E8A820] py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 mb-10 text-center">
        <h2 className="font-[family-name:var(--font-sora)] text-3xl md:text-4xl font-bold text-[#0A1F5C] mb-2">
          Moments with Trust Bank
        </h2>
        <p className="text-[#0A1F5C]/70 text-sm">
          A look at some of our most memorable moments, awards, and customer experiences.
        </p>
      </div>

      {/* Scrolling strip — no px padding so images can reach edges */}
      <div className="relative">
        {/* Left gradient fade */}
        <div
          className="absolute inset-y-0 left-0 z-10 w-32 pointer-events-none"
          style={{ background: "linear-gradient(to right, #E8A820 0%, transparent 100%)" }}
        />
        {/* Right gradient fade */}
        <div
          className="absolute inset-y-0 right-0 z-10 w-32 pointer-events-none"
          style={{ background: "linear-gradient(to left, #E8A820 0%, transparent 100%)" }}
        />

        <div ref={trackRef} className="flex gap-4 w-max will-change-transform">
          {all.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 rounded-2xl overflow-hidden shadow-xl"
              style={{ width: 300, height: 220 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/moments/${src}`}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
