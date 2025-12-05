const TagButton = ({ href = "#0", text }: { href?: string; text: string }) => {
  return (
    <a
      href={href}
      className="bg-white mb-3 mr-3 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm text-black font-semibold duration-300 hover:bg-[#FF7A00] hover:text-white shadow-md hover:shadow-lg"
    >
      {text}
    </a>
  );
};

export default TagButton;
