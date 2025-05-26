import { icons } from '@/Assets/icons';
import { CONTRIBUTORS } from '@/Constants/constants';
import { ContributorCard } from '@/Components';

export default function SupportPage() {
    const contributorElements = CONTRIBUTORS?.map((contributor) => (
        <ContributorCard key={contributor.name} contributor={contributor} />
    ));

    return (
        <div className="h-full w-full text-black flex flex-col pt-5 justify-start items-center gap-6">
            <div className="flex items-center justify-center flex-col gap-3">
                <div className="rounded-full overflow-hidden drop-shadow-sm hover:brightness-105 w-fit">
                    <div className="size-[70px] fill-[#3a67d8]">
                        {icons.support}
                    </div>
                </div>

                <h1 className="text-2xl font-bold w-full text-center mb-6">
                    Connect for any Issue or Support
                </h1>
            </div>

            <div className="flex flex-wrap items-start justify-center gap-10 w-full">
                {contributorElements}
            </div>
        </div>
    );
}
