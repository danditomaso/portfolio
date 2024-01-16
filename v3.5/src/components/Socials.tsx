import siteSettings from "@/config/siteSettings";

export default function Socials() {
  const socialLinks = siteSettings?.socials;

  return (
    <div className="text-md flex gap-8 font-sans">
      {Object.values(socialLinks).map((social) => {
        return (
          <a href={social.url} className="">
            {social.label}
          </a>
        );
      })}
    </div>
  );
}
