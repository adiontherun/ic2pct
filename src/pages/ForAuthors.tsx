import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, CheckCircle, AlertCircle, Users, BookOpen, Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ForAuthors = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Header Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Information for Authors</h1>
          <p className="text-xl">Guidelines and resources for paper submission and presentation</p>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Submission System */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-900" />
                  Paper Submission Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-blue-800 mb-4">
                      <strong>Manuscripts for 2026 IEEE 6th International Conference on Computing, Power, and Communication Technologies (IC2PCT-2026) will ONLY be accepted in electronic format through the Microsoft CMT online submission system:</strong>
                    </p>
                    <Button className="bg-blue-900 hover:bg-blue-800 mb-4">
                      <FileText className="h-4 w-4 mr-2" />
                      Submit via Microsoft CMT
                    </Button>
                    <p className="text-sm text-blue-700">
                      Inability/difficulty in online submission must be addressed to the organizing team.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Manuscript Requirements</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Authors should only submit originally written, unpublished work to 2026 IEEE 6th International Conference on Computing, Power, and Communication Technologies (IC2PCT-2026)</li>
                      <li>• Submissions should strictly follow the recommended IEEE Conference Template</li>
                      <li>• All references must follow the IEEE format of citation</li>
                      <li>• Please prefer to limit your paper within 6 pages in PDF format</li>
                      <li>• All fonts must be embedded in the file</li>
                      <li>• Fonts that require non-English language support are not allowed</li>
                      <li>• The document should not have any password protection</li>
                      <li>• Do not put your own page numbers in the manuscript</li>
                      <li>• Do not put your header and footer in the manuscript</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Over-length Manuscripts</h4>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <p className="text-yellow-800">
                        Authors wishing to submit an over-length manuscript may do so. There will be an over-length page fee of <strong>USD 25 / INR 1000 per page</strong> and limited to an additional 2 pages (maximum page submission is eight (8) pages).
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Button className="bg-blue-900 hover:bg-blue-800">
                      <Download className="h-4 w-4 mr-2" />
                      Download IEEE Template
                    </Button>
                    <Button variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      Sample Paper
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Scope and Requirements */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Scope and Technical Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-700">Note to Authors</h4>
                    <p className="text-gray-700 mb-4">
                      Papers submitted to 2026 IEEE 6th International Conference on Computing, Power, and Communication Technologies (IC2PCT-2026) need to include a quantitative discussion related to why and how the proposed/analysed/discussed technology, concept, process etc. is a significant technical improvement in its area.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-red-700">Out of Scope</h4>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <ul className="space-y-2 text-red-800">
                        <li>• Papers that are principally cataloguing qualitative or managerial aspects like impact, effect, case-study, rise, journey, study etc. will be insufficient to be accepted</li>
                        <li>• Submissions focusing only on policy/decision making or economic aspects are unsuitable to be accepted in IC2PCT-2026</li>
                        <li>• Short manuscripts/abstracts are not considered</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600">
                      The decision regarding the acceptance of the papers is at the discretion of the Chair based on the recommendations of Technical Program Committee and weightage/comments given by PC Members/Reviewers.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Types of Articles */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-900" />
                  Types of Articles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p className="text-gray-700">
                    2026 IEEE 6th International Conference on Computing, Power, and Communication Technologies (IC2PCT-2026) authors can select from a variety of approaches for articles that fall within the scope of this conference and IEEE. These article types include, but are not limited to:
                  </p>

                  <div className="grid md:grid-cols-1 gap-6">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 mb-3">Original Paper</h4>
                      <p className="text-gray-600 text-sm">
                        Describes the original work of author(s) in the form of an electronic manuscript, which may include abstract, key words, introduction, problem statement or justification, objective, approach, significance, research questions, limitations, definition of terms, referred or related work, methodology, technically in-depth investigation, details of experimental analysis, result and/or conclusion, further scope of work, references on the topic within the scope of 2026 IEEE 6th International Conference on Computing, Power, and Communication Technologies (IC2PCT-2026) and IEEE. This may include additional materials, including figures, tables, datasets, pictorial/graphical representations, and videos links.
                      </p>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 mb-3">Review Paper</h4>
                      <p className="text-gray-600 text-sm">
                        A thorough compilation and succinct summary of research performed on the topic within the scope of 2026 IEEE 6th International Conference on Computing, Power, and Communication Technologies (IC2PCT-2026) and IEEE, in the form of an electronic manuscript, which may include abstract, key words, introduction, problem statement or justification, objective, approach, significance, research questions, limitations, definition of terms, referred or related work, technically in-depth investigation or comparison, conclusion, pros and cons, proposed scope of further work and references. This may include additional materials, including figures, tables, datasets, pictorial/graphical representations, and video links.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* References Guidelines */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>References Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Self-Citations</h4>
                    <p className="text-gray-600">
                      To comply with ethical standards as well as to provide appropriate context for published work, citations of the author's own articles should not be excessive.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Citation Style</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• The list of references should only include works that are cited in the text and that have been published or accepted for publication</li>
                      <li>• Personal communications and unpublished works should only be mentioned in the text</li>
                      <li>• Do not use footnotes or endnotes as a substitute for a reference list</li>
                      <li>• The entries in the list should be numbered consecutively and cited in numerical order</li>
                      <li>• Citations in the text should be identified in IEEE referencing format</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* After Acceptance */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  After Acceptance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Final Manuscript</h4>
                    <p className="text-gray-600 mb-3">
                      After the confirmation of the acceptance of the manuscript from 2026 IEEE 6th International Conference on Computing, Power, and Communication Technologies (IC2PCT-2026), author(s) will have to submit the final version of the manuscript which must include the suggestions/changes as per instructions/improvement mentioned by the Technical Program Committee/Program Committee Members/Reviewers in the comments, if any, in the acceptance notification via email.
                    </p>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="text-blue-800 text-sm">
                        <strong>Update in Manuscript:</strong> Once the manuscript is accepted and if any changes are suggested, author(s) must include those changes without changing the essence of the accepted version. These changes must be limited to 20% part of the manuscript.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Copyright Transfer</h4>
                    <p className="text-gray-600 mb-3">
                      Authors will be asked to transfer copyright of the manuscript to IEEE. This is a mandatory requirement and will be an electronic process. Author(s) will be notified via email for e-copyright transfer process. This will ensure the widest possible protection and dissemination of information under copyright laws.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Preprint</h4>
                    <p className="text-gray-600">
                      The camera-ready-paper is referred to as Preprint, which will be the final version of the manuscript at the end of 2026 IEEE 6th International Conference on Computing, Power, and Communication Technologies (IC2PCT-2026). The preprint version of the eligible manuscripts will be sent to IEEE for inclusion in IEEE Digital Library. 2026 IEEE 6th International Conference on Computing, Power, and Communication Technologies (IC2PCT-2026) organizing team will notify the corresponding author/author(s) with preprint copy of the manuscript via email for their consent on the final version.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Other Guidelines */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-900" />
                  Other Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Ethics</h4>
                    <p className="text-gray-600 mb-3">
                      Originality of the manuscript submitted is the author(s) responsibility, and author(s) must avoid duplicate submission and publication, plagiarism, and self-plagiarism. All manuscript submissions will be screened against the CrossCheck database.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Co-Author Guidelines</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• When an article is submitted, it is implied that publication has been approved by all author(s)/co-author(s)</li>
                      <li>• Changes to the co-author list are not permitted after the manuscript has been accepted</li>
                      <li>• Exceptional cases may be considered by the Editor</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Corresponding Author Guidelines</h4>
                    <p className="text-gray-600">
                      The Corresponding Author is the author who will be doing the e-mail correspondence with 2026 IEEE 6th International Conference on Computing, Power, and Communication Technologies (IC2PCT-2026), irrespective of the author position in author sequence. The Corresponding Author will solely be responsible for putting the name and details of other authors/co-authors in the submission manuscript. Conference committee explicitly considers that all the authors/co-authors have contributed to the submission and their consent has been taken.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Formatting</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>Headings:</strong> Please prefer not to use more than three levels of displayed headings</li>
                      <li>• <strong>Abbreviations:</strong> Abbreviations should be defined at first mention and used consistently after that occurrence</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email Communications */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-blue-900" />
                  Email Communications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-2">Important Notice</h4>
                      <p className="text-yellow-700">
                        After the submission of the manuscripts in 2026 IEEE 6th International Conference on Computing, Power, and Communication Technologies (IC2PCT-2026), authors will be notified by e-mail(s) only. 2026 IEEE 6th International Conference on Computing, Power, and Communication Technologies (IC2PCT-2026) will not be held liable for any lapses in e-mail communication, like non-receipt of mail, mail going to junk/spam folder and similar glitches alike.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            {/* <Card>
              <CardHeader>
                <CardTitle>Contact for Authors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Technical Queries</h4>
                    <p className="text-gray-600">
                      <strong>Dr. Amit Sharma</strong><br />
                      Program Chair<br />
                      Email: program@ic2pct.org<br />
                      Phone: +91-11-2345-6789
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Registration Queries</h4>
                    <p className="text-gray-600">
                      <strong>Dr. Suresh Reddy</strong><br />
                      Registration Chair<br />
                      Email: registration@ic2pct.org<br />
                      Phone: +91-11-2345-6790
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ForAuthors;
