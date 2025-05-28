import { Loader2, PlusSquare, FileText } from 'lucide-react';
import { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { v4 as uuidv4 } from 'uuid';
import GlobalApi from '../GlobalApi';
import { useNavigate } from 'react-router-dom';

function AddResume() {
    const [openDialog, setOpenDialog] = useState(false);
    const [resumeTitle, setResumeTitle] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onCreate = async () => {
        if (!resumeTitle.trim()) return;

        setLoading(true);
        const uuid = uuidv4();
        const data = {
            title: resumeTitle,
            resumeId: uuid,
            userEmail: 'dummy email',
            userName: 'dummy fullname',
        };
        GlobalApi.CreateNewResume(data);
        setLoading(false);
        setOpenDialog(false);
        navigate(`/resume/${data.resumeId}/edit`);
    };

    return (
        <div className="group">
            {/* Add Resume Card */}
            <div
                className="h-64 w-full flex flex-col items-center justify-center gap-3 p-6 
                border-2 border-dashed border-gray-300 rounded-xl bg-white hover:border-blue-400
                transition-all duration-300 cursor-pointer hover:shadow-lg"
                onClick={() => setOpenDialog(true)}
            >
                <div className="relative">
                    <PlusSquare className="w-10 h-10 text-gray-400 group-hover:text-blue-500 transition-colors" />
                    <div className="absolute -inset-2 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                </div>
                <h3 className="text-lg font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                    Create New Resume
                </h3>
                <p className="text-sm text-gray-500 text-center">
                    Start building your professional resume from scratch
                </p>
            </div>

            {/* Create Resume Dialog */}
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle className="text-xl font-semibold text-gray-800">
                            <div className="flex items-center gap-2">
                                <FileText className="w-5 h-5 text-blue-500" />
                                Create New Resume
                            </div>
                        </DialogTitle>
                        <DialogDescription className="mt-2 text-gray-600">
                            Give your resume a title to get started
                        </DialogDescription>
                    </DialogHeader>

                    <div className="grid gap-4 py-4">
                        <div className="space-y-2">
                            <label
                                htmlFor="resume-title"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Resume Title
                            </label>
                            <Input
                                id="resume-title"
                                placeholder="e.g. Senior Frontend Developer Resume"
                                className="w-full"
                                value={resumeTitle}
                                onChange={(e) => setResumeTitle(e.target.value)}
                                onKeyDown={(e) =>
                                    e.key === 'Enter' && onCreate()
                                }
                            />
                            <p className="text-xs text-gray-500">
                                You can change this later
                            </p>
                        </div>
                    </div>

                    <DialogFooter>
                        <Button
                            variant="outline"
                            onClick={() => setOpenDialog(false)}
                            disabled={loading}
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={onCreate}
                            disabled={!resumeTitle.trim() || loading}
                            className="gap-2 border-[#4977ec] border bg-blue-50"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    Creating...
                                </>
                            ) : (
                                'Create Resume'
                            )}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default AddResume;
