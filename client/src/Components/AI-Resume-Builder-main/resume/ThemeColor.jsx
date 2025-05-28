import { useContext, useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { LayoutGrid } from 'lucide-react';
import { ResumeInfoContext } from '../ResumeInfoContext';
import GlobalApi from '../GlobalApi';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';

function ThemeColor() {
    const colors = [
        '#4977ec',
        '#FF5733',
        '#33FF57',
        '#3357FF',
        '#FF33A1',
        '#A133FF',
        '#33FFA1',
        '#FF7133',
        '#71FF33',
        '#7133FF',
        '#FF3371',
        '#33FF71',
        '#3371FF',
        '#A1FF33',
        '#33A1FF',
        '#5733FF',
        '#33FF5A',
        '#5A33FF',
        '#FF335A',
        '#335AFF',
    ];

    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const [selectedColor, setSelectedColor] = useState(resumeInfo?.themeColor);
    const { resumeId } = useParams();

    const onColorSelect = (color) => {
        setSelectedColor(color);
        setResumeInfo({
            ...resumeInfo,
            themeColor: color,
        });
        const data = { themeColor: color };
        GlobalApi.UpdateResumeDetail(resumeId, data);
        toast.success('Theme color updated');
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    size="sm"
                    className="flex gap-2 items-center border-[#4977ec] text-[#4977ec]"
                >
                    <LayoutGrid size={16} /> Theme
                </Button>
            </PopoverTrigger>
            <PopoverContent className="border border-[#ddd] rounded-xl shadow-lg flex items-center flex-col justify-center">
                <h2 className="mb-4 font-bold">Select Theme Color</h2>
                <div className="grid grid-cols-5 gap-4">
                    {colors.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => onColorSelect(item)}
                            className={`size-8 rounded-full cursor-pointer transition-all border-2 ${
                                selectedColor === item
                                    ? 'border-black scale-110'
                                    : 'border-transparent'
                            }`}
                            style={{ background: item }}
                            title={item}
                        ></div>
                    ))}
                </div>
            </PopoverContent>
        </Popover>
    );
}

export default ThemeColor;
