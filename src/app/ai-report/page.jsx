
import ReportSlideOne from '../components/ai-report/ReportSlideOne';
import ReportSlideTwo from '../components/ai-report/ReportSlideTwo';
import ReportSlideThree from '../components/ai-report/ReportSlideThree';
import ReportSlideFour from '../components/ai-report/ReportSlideFour';
import '../styles/report.css'
export default function AiReport() {
  return (
    <div className='ReportSc'>
      <div className="ReportSccontainer">
        <ReportSlideOne />
        <ReportSlideTwo />
        <ReportSlideThree />
        <ReportSlideFour />
      </div>
    </div>
  );
}
