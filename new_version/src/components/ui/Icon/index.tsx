"use client";

function IconSvg({ id }: {
  id: string;
}) {

  return (
    <svg>
      <use xlinkHref={"/sprite.svg#" + id} />
    </svg>
  );
}

export default IconSvg;
