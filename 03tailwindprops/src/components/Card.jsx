function Card({ imgSrc, message, name, description }) {
  return (
    <div className="px-2">
      <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          class="w-24 h-24 md:h-auto md:w-48 md:rounded-none rounded-full mx-auto object-cover"
          src={imgSrc}
          alt={name}
          width="384"
          height="512"
        />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p class="text-lg font-medium text-slate-100">{message}</p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">{name}</div>
            <div class="text-slate-200">{description}</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}
export default Card;
