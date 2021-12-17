import{_ as n,c as s,o as a,a as t}from"./app.57dc5434.js";const m='{"title":"Home","description":"","frontmatter":{"home":true,"actionText":"Get Started \u2192","actionLink":"/Getting-started","features":[{"title":"OpenAPI specification","details":"Compatible with the OpenAPI Specification version 3. formerly known as Swagger."},{"title":"Incode your php file","details":"Using #[Attributes] or @Annotations lets you write the documentation inside the php source files which helps keeping the documentation in sync."},{"title":"Useful error messages","details":"Enhanced errors messages with hints and context."}]},"headers":[{"level":2,"title":"Links","slug":"links"}],"relativePath":"index.md","lastUpdated":1639751744041}',e={},p=t(`<p>Install with composer:</p><div class="language-bash"><pre><code><span class="token function">composer</span> require zircote/swagger-php
</code></pre></div><p>Create a php file:</p><div class="language-php"><pre><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;vendor/autoload.php&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$openapi</span> <span class="token operator">=</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>OpenApi<span class="token punctuation">\\</span>Generator</span><span class="token operator">::</span><span class="token function">scan</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;/path/to/project&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">header</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Content-Type: application/x-yaml&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$openapi</span><span class="token operator">-&gt;</span><span class="token function">toYaml</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></code></pre></div><p>Add annotations to your php files.</p><div class="language-php"><pre><code><span class="token comment">/**
 * @OA\\Info(title=&quot;My First API&quot;, version=&quot;0.1&quot;)
 */</span>

<span class="token comment">/**
 * @OA\\Get(
 *     path=&quot;/api/resource.json&quot;,
 *     @OA\\Response(response=&quot;200&quot;, description=&quot;An example resource&quot;)
 * )
 */</span>
</code></pre></div><p>Or, as of PHP 8.1 use attributes</p><div class="language-php"><pre><code><span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name class-name-fully-qualified">OA<span class="token punctuation">\\</span>Info</span><span class="token punctuation">(</span><span class="token attribute-class-name class-name">title</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;My First API&quot;</span><span class="token punctuation">,</span> <span class="token attribute-class-name class-name">version</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;0.1&quot;</span><span class="token punctuation">)</span></span><span class="token delimiter punctuation">]</span></span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">OpenApi</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Controller</span><span class="token punctuation">{</span>
    <span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name class-name-fully-qualified">OA<span class="token punctuation">\\</span>Get</span><span class="token punctuation">(</span><span class="token attribute-class-name class-name">path</span><span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;/api/resource.json&#39;</span><span class="token punctuation">)</span></span><span class="token delimiter punctuation">]</span></span>
    <span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name class-name-fully-qualified">OA<span class="token punctuation">\\</span>Response</span><span class="token punctuation">(</span><span class="token attribute-class-name class-name">response</span><span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;200&#39;</span><span class="token punctuation">,</span> <span class="token attribute-class-name class-name">description</span><span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;An example resource&#39;</span><span class="token punctuation">)</span></span><span class="token delimiter punctuation">]</span></span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getResource</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
       <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>And view and interact with your API using <a href="https://swagger.io/tools/swagger-ui/" target="_blank" rel="noopener noreferrer">Swagger UI </a></p><h2 id="links" tabindex="-1">Links <a class="header-anchor" href="#links" aria-hidden="true">#</a></h2><ul><li><a href="./Getting-started.html">Getting started guide</a></li><li><a href="https://swagger.io/docs/" target="_blank" rel="noopener noreferrer">OpenApi Documentation</a></li><li><a href="http://swagger.io/specification/" target="_blank" rel="noopener noreferrer">OpenApi Specification</a></li><li><a href="./Migrating-to-v3.html">Migration from 2.x to 3.x</a></li><li><a href="./Migrating-to-v4.html">Migration from 3.x to 4.x</a></li><li><a href="https://github.com/zircote/swagger-php/tree/master/Examples" target="_blank" rel="noopener noreferrer">Learn by example</a> lots of example of how to generate</li><li><a href="./Related-projects.html">Related projects</a></li><li><a href="https://github.com/zircote/swagger-php/tree/2.x/docs" target="_blank" rel="noopener noreferrer">Swagger-php 2.x documentation</a> The docs for swagger-php v2</li><li><a href="/1.x/">Swagger-php 1.x documentation</a> The docs for swagger-php v1</li></ul>`,11),o=[p];function i(c,l,r,u,k,d){return a(),s("div",null,o)}var h=n(e,[["render",i]]);export{m as __pageData,h as default};