import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "Como posso agendar uma consulta?",
      answer:
        "Você pode agendar uma consulta entrando em contato conosco através do nosso site, telefone ou WhatsApp. Nossa equipe terá o prazer em ajudá-la a encontrar o melhor horário para você.",
    },
    {
      question: "Quais são os tratamentos mais comuns que a Dra. Marina oferece?",
      answer:
        "A Dra. Marina oferece uma ampla gama de tratamentos, incluindo preenchimentos dérmicos, toxina botulínica (Botox), tratamentos a laser, peelings químicos e terapias para acne e outras condições de pele.",
    },
    {
      question: "Os tratamentos são personalizados para cada paciente?",
      answer:
        "Sim, todos os nossos tratamentos são cuidadosamente personalizados para atender às necessidades e objetivos individuais de cada paciente. A Dra. Marina realiza uma avaliação completa para desenvolver um plano de tratamento exclusivo para você.",
    },
    {
      question: "Como devo me preparar para a minha primeira consulta?",
      answer:
        "Para sua primeira consulta, recomendamos que você venha com uma lista de suas preocupações com a pele e quaisquer perguntas que você tenha. Também é útil trazer uma lista dos produtos que você está usando atualmente.",
    },
    {
      question: "Qual é a política de cancelamento?",
      answer:
        "Pedimos que você nos avise com pelo menos 24 horas de antecedência se precisar cancelar ou reagendar sua consulta. Isso nos permite oferecer o horário a outro paciente.",
    },
  ];

  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Perguntas Frequentes
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Tudo o que você precisa saber antes da sua consulta com a Dra. Marina Razé.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl mt-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
