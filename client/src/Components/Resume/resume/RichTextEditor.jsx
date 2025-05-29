import { Button } from '../ui/button';
import { ResumeInfoContext } from '../ResumeInfoContext';
import { Brain, LoaderCircle } from 'lucide-react';
import { useContext, useState } from 'react';
import {
    BtnBold,
    BtnBulletList,
    BtnItalic,
    BtnLink,
    BtnNumberedList,
    BtnStrikeThrough,
    BtnUnderline,
    Editor,
    EditorProvider,
    Separator,
    Toolbar,
} from 'react-simple-wysiwyg';
import { AIChatSession } from '../AIModal';
import { toast } from 'sonner';

function RichTextEditor({ onRichTextEditorChange, index, defaultValue }) {
    const [value, setValue] = useState(defaultValue);
    const { resumeInfo } = useContext(ResumeInfoContext);
    const [loading, setLoading] = useState(false);

    const GenerateSummeryFromAI = async () => {
        if (!resumeInfo?.Experience[index]?.title) {
            toast('Please Add Position Title');
            return;
        }

        setLoading(true);
        try {
            const PROMPT = `Position Title: ${resumeInfo.Experience[index].title}. Based on this title, provide 5–7 bullet points for resume experience. Return the result in HTML <ul><li> format only. Do not include experience level or JSON formatting.`;

            const response = await AIChatSession.sendMessage(PROMPT);
            const html = await response.response.text();

            setValue(html);
        } catch (error) {
            toast.error('Failed to generate summary from AI');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="flex justify-between my-2 items-center">
                <label className="text-[14px] font-medium">Work Summery</label>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={GenerateSummeryFromAI}
                    disabled={loading}
                    className="hover:bg-blue-50 border-primary text-primary flex gap-2"
                >
                    {loading ? (
                        <LoaderCircle className="animate-spin" />
                    ) : (
                        <>
                            <Brain className="h-4 w-4" /> Generate from AI
                        </>
                    )}
                </Button>
            </div>
            <EditorProvider>
                <Editor
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                        onRichTextEditorChange(e);
                    }}
                >
                    <Toolbar>
                        <BtnBold />
                        <BtnItalic />
                        <BtnUnderline />
                        <BtnStrikeThrough />
                        <Separator />
                        <BtnNumberedList />
                        <BtnBulletList />
                        <Separator />
                        <BtnLink />
                    </Toolbar>
                </Editor>
            </EditorProvider>
        </div>
    );
}

export default RichTextEditor;
