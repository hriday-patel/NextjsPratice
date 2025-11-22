import { SignInButton, SignOutButton } from "@clerk/nextjs";

const Navbar: React.FC = () => {
  return (
    <div className="px-2 py-4 border-b border-b-slate-400/25 drop-shadow-xs flex justify-between bg-slate-800/95">
      <div className="text-lg tracking-tight font-bold text-shadow-xs text-slate-200">
        NEXTJS Project
      </div>
      <div className="flex gap-2 justify-center items-center">
        <div className="px-2 py-1 rounded-md inline-block bg-neutral-700/65 text-white">
          <SignInButton
            mode="modal"
            appearance={{
                elements: {
                    footer: {
                        
                    }
                }
            }}
          />
        </div>
        <div className="px-2 py-1 rounded-md inline-block bg-neutral-700/65 text-white">
          <SignOutButton />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
